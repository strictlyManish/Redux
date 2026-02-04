import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../app/TodoSlice/todoSlice";

function Task() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-10">
      <h1>Pending Task here..</h1>

      {todos.length > 0 ? (
        todos.map((todo,i) => (
          <li
            key={i}
            className="relative list-none bg-gray-700 w-fit p-4 mt-4 rounded-2xl"
          >
            {todo.todo}
            <br />
            <span>{todo.completed ? "Done" : "Not Completed"}</span>

            <button
              onClick={() => dispatch(removeTodo(i))}
              className="absolute top-2 right-2"
            >
              ❌
            </button>
          </li>
        ))
      ) : (
        <p className="text-gray-500 mt-10 text-center">No Task Added..</p>
      )}
    </div>
  );
}

export default Task;
