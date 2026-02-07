import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const TaskReducres = createSlice({
  name: "Task",
  initialState: {
    tasks: [
      {
        id: "x50f",
        title: "Advantage of computer",
        content:
          "Computers process data at incredible speeds, completing complex calculations in seconds that would take humans days or years. They also deliver highly accurate results when given correct input",
      },
      
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
      toast.success('Task Created')
    },
    removeTask:(state,action)=>{
      state.tasks = state.tasks.filter((obj)=> obj.id !== action.payload);
      toast.success('Task removed')
    },
    clearTask:(state,action)=>{
      state.tasks = [];
      toast.success('All Task Cleared')
    }
  },
});
export const { addTask,clearTask,removeTask} = TaskReducres.actions;
export default TaskReducres.reducer;
