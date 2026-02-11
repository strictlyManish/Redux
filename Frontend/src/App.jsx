import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Editor from "react-simple-code-editor"


function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "function () =>{ return a+b }",
    },
  });

  const [result, setResult] = useState("This code snippet contains a fundamental syntax error and lacks proper scope definition. As a senior reviewer, I’ve broken down the issues and provided a scalable, production-ready version.\n\n❌ **Bad Code:**\n```javascript\nfunction () =>{ return a+b }\n```\n\n🔍 **Issues:**\n*   ❌ **Syntax Error:** You cannot combine the `function` keyword with the arrow `=>` syntax. It must be one or the other.\n*   ❌ **Undefined Variables:** `a` and `b` are used but not passed as parameters, which will cause a `ReferenceError` unless they exist in the global scope (which is a bad practice).\n*   ❌ **Anonymous Function:** Since it’s not assigned to a variable or given a name, it cannot be reused or easily debugged in a stack trace.\n\n✅ **Recommended Fix (Modern Arrow Syntax):**\n\nIf you want a concise, modern approach:\n```javascript\n/**\n * Calculates the sum of two numbers.\n * @param {number} a \n * @param {number} b \n * @returns {number}\n */\nconst add = (a, b) => a + b;\n```\n\n✅ **Recommended Fix (Standard Function Syntax):**\n\nIf you prefer the traditional declaration (better for hoisting or methods):\n```javascript\nfunction add(a, b) {\n    // Basic validation to ensure inputs are numbers\n    if (typeof a !== 'number' || typeof b !== 'number') {\n        throw new TypeError('Both arguments must be numbers');\n    }\n    return a + b;\n}\n```\n\n💡 **Improvements:**\n*   **✔ Correct Syntax:** Uses proper ES6 arrow function or standard function declaration.\n*   **✔ Explicit Parameters:** `a` and `b` are now locally scoped to the function, preventing side effects.\n*   **✔ Documentation:** Added JSDoc comments to help other developers (and IDEs) understand the expected types.\n*   **✔ Implicit Return:** In the arrow function version, I removed the `{ return ... }` to keep the code clean and readable (Concise Body).\n*   **✔ Error Handling:** Added a type check in the standard version to prevent bugs when non-numeric values are passed.\n\n**Final Note:** Always ensure your functions are \"Pure\" whenever possible—meaning they don't rely on or modify variables outside their own scope. This makes testing much easier! 🚀");

  const getReesult = async (data) => {
    const res = await axios.post("http://localhost:3000/code",{code:data.code});
    setResult(res);
    reset();
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white px-4 sm:px-8 md:px-12 lg:px-15 py-5">
      <h1 className="font-thin text-xl sm:text-2xl bg-gray-600 w-fit p-2 rounded-full">
        <span className="bg-white text-black rounded-full px-2">Code</span>{" "}
        Review
      </h1>

      <div className="flex flex-col lg:flex-row w-full min-h-[85vh] gap-5 mt-5 bg-gray-700 p-2 rounded">
        <form
          onSubmit={handleSubmit(getReesult)}
          className="w-full lg:w-1/2 bg-gray-950 p-4 sm:p-5 rounded flex flex-col justify-between gap-2"
        >
          <textarea
            {...register("code")}
            className="h-64 sm:h-80 lg:h-full resize-none outline-0 border-0 bg-transparent"
            placeholder="Paste Your Code here.."
          ></textarea>

          <button
            type="submit"
            className="bg-gray-100 flex cursor-pointer w-fit text-black self-end p-2 rounded-4xl"
          >
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

        <div className="w-full lg:w-1/2 bg-gray-700 p-4 sm:p-5 rounded min-h-64 overflow-auto">
          <span className="bg-white rounded-full text-black px-5  py-1">
            Result here
          </span>
          <br />
          <div className="mt-2">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
