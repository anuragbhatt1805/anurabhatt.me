import { useState } from "react";

const Loading = () => {
    const [timer, setTimer] = useState<boolean>(false);

    setTimeout(() => {
        setTimer(true);
    }, 3000)

  return (
    <div className="flex flex-col gap-y-10 text-justify items-center justify-center h-full dark:bg-[#231F31] bg-white dark:text-white text-gray-900">
      <div className="flex items-center space-x-10 my-10">
        <svg
          className="animate-spin h-16 w-16 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.492a4.002 4.002 0 00-4 4.006h-2zm12-5.291h-4V5.473a7.963 7.963 0 011.808 9.05l-1.592 1.591A9.963 9.963 0 0012 20.936V24c6.627 0 12-5.373 12-12h-4z"
          ></path>
        </svg>
        <span className="text-3xl">Loading...</span>
      </div>
      <div className="flex flex-col items-center gap-y-3">
            {timer && (
                <>
                    <p className="text-2xl text-red-700 font-semibold">Sorry, the page is taking too long to load.</p>
                    <p className="text-2xl text-green-700">Please bear with us while our serverless backend starts up. Sometimes it takes a moment.</p>
                </>
            )}
      </div>
    </div>
  );
};

export default Loading;
