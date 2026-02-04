import { useForm } from "react-hook-form"
import Task from "./pages/Task";
import { useDispatch } from "react-redux";
import { addTodo } from "./app/TodoSlice/todoSlice";

function App() {

  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm();
  const dispatch = useDispatch();

  const todosSumbit = (data)=>{
    console.log(data);
    data.complited = false;
    dispatch(addTodo(data));
    reset();
  }

  return (
    <div className='h-screen w-screen bg-gray-800 text-white px-10 py-15'>
      <h1>Todos.</h1>

      <form onSubmit={handleSubmit(todosSumbit)} className="bg-gray-700 backdrop-blur-3xl mt-12 w-fit p-5 rounded-2xl">
        <input {...register('todo',{ required: true })} type="text" placeholder="Task title here.." className="outline-0 border-0" />
        <button type="submit" className="bg-amber-50 ml-5 text-black rounded-2xl  text-sm px-4 py-2">Add Task</button>
      </form>
      <Task/>
    </div>
  )
}

export default App