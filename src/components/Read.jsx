import { useDispatch, useSelector } from "react-redux"
import { clearTask, removeTask } from "../app/Features/taskSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { CircleX } from "lucide-react";

function Read() {

  const {tasks} = useSelector(state=>state.task);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-700 px-12 py-12 w-2/4 rounded">
      {tasks.length > 0 ? tasks.map((obj)=>{
        return(
          <li onClick={()=>navigate(`/edit/${obj.id}`)} key={obj.id}
            className="bg-gray-800 px-2 py-2 text-gray-500 list-decimal rounded mt-1 hover:border"
          >
            <p className="uppercase font-bold">{obj.title}</p>
            <p className="mt-1 text-[15px] font-thin">{obj.content}</p>
          </li>

        )
      }) : <span className="text-center">There is no Task..</span>}
      {tasks.length >0 ? <button onClick={()=>dispatch(clearTask())} className="px-5 cursor-pointer bg-green-700 py-2 mt-15 rounded-full">Clear</button> :'' }
    </div>
  )
}

export default Read


