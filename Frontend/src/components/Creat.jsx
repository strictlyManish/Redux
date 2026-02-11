import React from "react";

function Creat() {
  return (
    <>
      <form className="w-full lg:w-1/2 bg-gray-950 p-4 sm:p-5 rounded flex flex-col justify-between gap-2">
        <textarea
          className="h-64 sm:h-80 lg:h-full resize-none outline-0 border-0 bg-transparent"
          placeholder="Paste Your Code here.."
        ></textarea>

        <button className="bg-gray-100 flex cursor-pointer w-fit text-black self-end p-2 rounded-4xl">
          <p className="bg-black text-white px-2 rounded-full mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-code-xml-icon lucide-code-xml"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </p>
          Review
        </button>
      </form>
    </>
  );
}

export default Creat;
