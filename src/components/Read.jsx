import { useDispatch, useSelector } from "react-redux";
import { clearTask } from "../app/Features/taskSlice";
import { useNavigate } from "react-router-dom";

function Read() {
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-3xl mx-auto bg-gray-800 rounded-xl p-4 sm:p-6 flex flex-col gap-4 h-[75vh]">
      {/* Task List */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {tasks.length > 0 ? (
          tasks.map((obj) => (
            <div
              key={obj.id}
              onClick={() => navigate(`/edit/${obj.id}`)}
              className="bg-gray-700 cursor-pointer rounded-lg p-4 hover:bg-gray-600 transition border border-transparent hover:border-gray-500"
            >
              <h3 className="text-white font-semibold uppercase text-sm sm:text-base">
                {obj.title}
              </h3>
              <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                {obj.content}
              </p>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            There are no tasks yet.
          </div>
        )}
      </div>

      {/* Clear Button */}
      {tasks.length > 0 && (
        <button
          onClick={() => dispatch(clearTask())}
          className="self-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition"
        >
          Clear All Tasks
        </button>
      )}
      {<p className="bg-gray-600 w-fit px-5 py-4 rounded">Total Pending Task : {tasks.length}</p>}
    </section>
  );
}

export default Read;
