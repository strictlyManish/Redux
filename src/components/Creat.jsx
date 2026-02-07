import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../app/Features/taskSlice";
import { nanoid } from "nanoid";

function Creat() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const SumbitFrom = (data) => {
    data.id = nanoid(5);
    dispatch(addTask(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(SumbitFrom)}
      className="bg-gray-800 text-gray-400 mt-10  mx-4 p-6 text-left text-sm rounded-lg"
    >
      {errors.title && <span className="text-red-600">*</span>}
      <label className="font-medium" htmlFor="task">
        Project Title
      </label>
      <input
        {...register("title", { required: "Title is required" })}
        id="task"
        className="w-full text-gray-100 border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3"
        type="text"
        placeholder="Enter title"
      />
      {errors.content && <span className="text-red-600">*</span>}
      <label className="font-medium" htmlFor="content">
        Content
      </label>
      <textarea
        {...register("content", { required: "Title is Description" })}
        rows="3"
        id="content"
        className="w-full resize-none text-gray-100 border mt-1.5 border-gray-500/30 outline-none rounded py-2.5 px-3"
        type="email"
        placeholder="Task Description here.."
      ></textarea>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="my-3 bg-blue-500 py-2 px-5 rounded text-white font-medium"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Creat;
