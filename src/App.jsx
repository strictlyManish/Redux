import { Route, Routes } from "react-router-dom";
import Creat from "./components/Creat";
import Read from "./components/Read";
import Edit from "./components/Edit"

function App() {
  return (
    <div className="min-h-screen w-screen text-white bg-gray-800 px-15 py-10">
      <h1 className="font-extralight uppercase mb-6">Make Your Notes Easily</h1>

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-between">
              <Creat />
              <Read />
            </div>
          }
        />

        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
