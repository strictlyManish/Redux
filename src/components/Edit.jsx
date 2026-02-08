import { CircleArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeTask, updateTask } from "../app/Features/taskSlice";

function Edit() {
  const { id } = useParams();

  const data = useSelector((state) => state.task.tasks);

  const oldData = data.find((obj) => obj.id == id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: oldData });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const SumbitFrom = (data) => {
    dispatch(updateTask(data));
    navigate("/")
    reset();
  };


  const DeleteTask = ()=>{
    dispatch(removeTask(id));
    navigate("/")
  }

  return (
    <div className="w-fit">
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer active:scale-95  px-2 py-2 flex gap-2 rounded-4xl"
      >
        <CircleArrowLeft /> <p>Back</p>
      </button>

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
        <div className="flex items-center gap-5">
          <button
            type="submit"
            className="my-3 bg-blue-500 py-2 px-5 rounded cursor-pointer text-white font-medium"
          >
            Update task
          </button>
          <button
            onClick={DeleteTask}
            type="button"
            className="my-3 bg-red-500 py-2 px-5 rounded cursor-pointer text-white font-medium"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
