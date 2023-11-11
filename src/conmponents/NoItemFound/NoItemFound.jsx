import React from "react";
import { Link } from "react-router-dom";

const NoItemFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h4 className="my-6 text-3xl">No Carts item here .....</h4>
        <Link
          className="px-5 py-3 w-fit border border-zinc-800 bg-indigo-600 rounded shadow-md hover:bg-indigo-700 transition-all duration-300"
          to={"/products"}
        >
          Go to Product
        </Link>
      </div>
    </div>
  );
};

export default NoItemFound;
