import { configureStore } from "@reduxjs/toolkit";
import TaskReducres from "./Features/taskSlice";

export const store = configureStore({
  reducer: {
    task: TaskReducres,
  },
});
