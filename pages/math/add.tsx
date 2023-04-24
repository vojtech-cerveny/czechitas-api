import NavBar from "@/components/navbar";
import { useState } from "react";

const MathAdd = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        a: a,
        b: b,
      };

      const response = await fetch(`/api/math/add?a=${data.a}&b=${data.b}`, {
        method: "GET",
      });
      return response.json();
    };
    postData().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
        setResult(data.result);
      }
    });
  }

  return (
    <div className="container mx-auto">
      <NavBar />
      {error && (
        <div className="p-4">
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Error!</span> {error}
          </div>
        </div>
      )}
      {!error && (
        <div className="p-5">
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg"
            role="alert"
          >
            {/* <span className="font-medium">Error!</span> {error} */}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="a"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            A number
          </label>
          <input
            id="a"
            type="text"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="a number"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="b"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            B number
          </label>
          <input
            id="b"
            type="text"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Calculate
        </button>
      </form>
      <span className="">Result is:<h1 className="text-7xl text-green-800"> {result}</h1></span>
    </div>
  );
};

export default MathAdd;
