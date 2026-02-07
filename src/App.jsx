import Creat from "./components/Creat"
import Read from "./components/Read"

function App() {
  console.log('first')
  return (
    <div className='h-screen w-screen text-white bg-gray-800 px-15 py-10'>
      <h1 className='font-extralight uppercase'>Make Your Notes Easily</h1>
      <div className="flex justify-between">
        <Creat/>
        <Read/>
      </div>
    </div>
  )
}

export default App