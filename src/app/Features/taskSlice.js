import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const TaskReducres = createSlice({
  name: "Task",
  initialState: {
    tasks: [
      {
        id: "x50f",
        title: "Advantage of Computer",
        content:
          "Computers process data at incredible speeds, completing complex calculations in seconds that would take humans days or years. They also deliver highly accurate results when given correct input.",
      },
      {
        id: "x51f",
        title: "Speed of Computer",
        content:
          "One of the biggest strengths of computers is speed. They can perform millions of instructions per second, making them essential for scientific and business applications.",
      },
      {
        id: "x52f",
        title: "Accuracy of Computer",
        content:
          "Computers provide highly accurate results as long as the input data and instructions are correct, reducing human error in calculations and data processing.",
      },
      {
        id: "x53f",
        title: "Storage Capacity",
        content:
          "Computers can store vast amounts of data in various formats and retrieve it quickly, making information management efficient and reliable.",
      },
      {
        id: "x54f",
        title: "Automation",
        content:
          "Computers can automate repetitive tasks, saving time and increasing productivity in industries, offices, and daily life.",
      },
      {
        id: "x55f",
        title: "Multitasking",
        content:
          "Computers can perform multiple tasks simultaneously, such as running applications, processing data, and managing networks efficiently.",
      },
      {
        id: "x56f",
        title: "Disadvantage of Computer",
        content:
          "Computers depend on electricity and proper maintenance, and excessive use can lead to health issues like eye strain and poor posture.",
      },
      {
        id: "x57f",
        title: "Role in Education",
        content:
          "Computers play a vital role in education by enabling online learning, research, digital libraries, and interactive teaching methods.",
      },
      {
        id: "x58f",
        title: "Role in Business",
        content:
          "In business, computers help with accounting, communication, data analysis, and decision-making, improving efficiency and accuracy.",
      },
      {
        id: "x59f",
        title: "Future of Computers",
        content:
          "The future of computers includes advancements in artificial intelligence, quantum computing, and smarter automation systems.",
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      toast.success("Task Created");
    },

    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task,
      );

      toast.success("Data Updated");
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((obj) => obj.id !== action.payload);
      toast.success("Task removed");
    },
    clearTask: (state, action) => {
      state.tasks = [];
      toast.success("All Task Cleared");
    },
  },
});
export const { addTask, clearTask, removeTask, updateTask } =
  TaskReducres.actions;
export default TaskReducres.reducer;
