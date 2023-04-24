import Image from "next/image";
import NavBar from "@/components/navbar";
import { Lecture } from "../api/czechitas/lektori/[...slug]";
import { useEffect, useState } from "react";

export default function Lektori() {
  const [lectures, setLectures] = useState<Lecture[] | null>([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    downloadLecturesData();
  }, []);

  async function downloadLecturesData() {
    const response = await fetch(`/api/czechitas/lektori/all`, {
      method: "GET",
    });
    const data = await response.json();
    
    if(data.error) {
      setError(data.error);
      setLectures(null);
    } else {
      setLectures(data.result);
    }
  }

  return (
    <>
      {error && (
        <div className="justify-center align-middle ">
          <div
            className="text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-screen grid grid-cols-1 justify-items-center justify-center"
            role="alert"
          >
            <div className="text-3xl">
              <span className="font-medium ">{error}</span> 
            </div>
            <Image className="p-10" src="/shit-happens.svg" alt="Oh my!" width={500} height={500} />
          </div>
        </div>
      )}
      {lectures && lectures.length == 0 && <div>loading</div>}
      {lectures && lectures.length > 0 && (
        <main
          className={`container mx-auto`}
        >
          <NavBar />

          <div className="flex flex-col items-center  flex-1 text-center">
            <h1 className="text-6xl font-bold">Lektori</h1>
            <div className="grid grid-cols-2 gap-2">
            {lectures.map((lecture) => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {lecture.firstName} {lecture.lastName}
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {lecture.lectures.map((lecture) => (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {lecture}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
