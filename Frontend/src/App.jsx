import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:{
      code : 'function () =>{ return a+b }'
    }
  });

  const getReesult = (data) =>{
    console.log(data)
    reset()
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white px-4 sm:px-8 md:px-12 lg:px-15 py-5">
      <h1 className="font-thin text-xl sm:text-2xl bg-gray-600 w-fit p-2 rounded-full">
        <span className="bg-white text-black rounded-full px-2">Code</span>{" "}
        Review
      </h1>

      <div className="flex flex-col lg:flex-row w-full min-h-[80vh] gap-5 mt-4 bg-gray-700 p-2 rounded">
        <form onSubmit={handleSubmit(getReesult)} className="w-full lg:w-1/2 bg-gray-950 p-4 sm:p-5 rounded flex flex-col justify-between gap-2">
          <textarea
            {...register('code')}
            className="h-64 sm:h-80 lg:h-full resize-none outline-0 border-0 bg-transparent"
            placeholder="Paste Your Code here.."
          ></textarea>

          <button type="submit" className="bg-gray-100 flex cursor-pointer w-fit text-black self-end p-2 rounded-4xl">
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

        <div className="w-full lg:w-1/2 bg-gray-700 p-4 sm:p-5 rounded min-h-64">
          Result here
        </div>
      </div>
    </div>
  );
}

export default App;
