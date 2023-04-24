import NavBar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Quote } from "../api/czechitas/hlasky/create";


export default function Lektori() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    downloadQuotesData();
  }, []);

  async function downloadQuotesData() {
    const response = await fetch(`/api/czechitas/hlasky/all`, {
      method: "GET",
    });
    const data = await response.json();

    setQuotes(data.result);
  }

  return (
    <>
      {quotes.length == 0 && <div>loading</div>}
      {quotes.length > 0 && (
        <main
          className={`container mx-auto`}
        >
          <NavBar />

          <div className="flex flex-col items-center  flex-1 text-center">
            <h1 className="text-6xl font-bold">Hlasky</h1>
            <div className="grid grid-cols-2 gap-6 mt-6">
            {quotes.map((quote) => (
              <div key={quote.id} className="max-w-sm rounded overflow-hidden shadow-lg border-gray-200 border-2 hover:shadow-2xl duration-300">
                <div className="px-6 py-4">
                  <p className="text-gray-700 text-base">
                    {quote.quote}
                  </p>
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
