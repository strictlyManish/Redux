function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 text-white px-15 py-5 overflow-hidden">
      <h1 className="font-thin text-2xl bg-gray-600 w-fit p-2 rounded-full"><span className="bg-white text-black rounded-full px-2" >Code</span> Review</h1>

      <div className="flex w-full h-[88vh] gap-5 mt-4 justify-between bg-gray-700 p-2 rounded">
        <form className="w-1/2 bg-gray-950 p-5 h-full rounded flex flex-col justify-between gap-2">
          <textarea
            className="h-full resize-none outline-0 border-0"
            placeholder="Paste Your Code here.."
          ></textarea>
          <button className="bg-gray-100 flex cursor-pointer w-fit text-black self-end p-2 rounded-4xl">
            <p className="bg-black text-white px-2 rounded-full mr-1">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-code-xml-icon lucide-code-xml"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>{" "}
            </p>
            Review
          </button>
        </form>
        <div className="w-1/2 bg-gray-700 p-5 h-full rounded">Result here</div>
      </div>
    </div>
  );
}

export default App;
