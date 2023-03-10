"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col mt-4 justify-center items-center">
      <>
        <h2 className="text-4xl text-center">WOops!</h2>
        <p className="text-lg mt-2 text-center">Something Went Wrong!</p>
        <p className="text-sm">{error.message}</p>
      </>

      <button
        className="btn p-2 rounded-2xl bg-blue-500 text-white mt-6"
        onClick={reset}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}
