"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="mt-10  text-center">
      <p className="mx-auto w-[50%] rounded-xl bg-red-500 p-5 text-4xl text-white">
        Something went wrong!!!
      </p>
      <p className="mx-auto mt-2 w-[50%] rounded-xl bg-red-500 p-5 text-4xl text-white">
        {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="btn btn-outline btn-error mt-5"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
