import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen  duration-300"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> Background: {color}</div>
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-4 rounded-full text-white shadow-lg "
          style={{backgroundColor:"red"}}>Red</button>

           <button 
            onClick={()=>{setColor("green")}}
            className="outline-none px-4 py-4 rounded-full text-white shadow-lg "
          style={{backgroundColor:"green"}}>Green</button>

           <button
            onClick={()=>{setColor("blue")}}
           className="outline-none px-4 py-4 rounded-full text-white shadow-lg "
          style={{backgroundColor:"blue"}}>Blue</button>

           <button 
            onClick={()=>{setColor("yellow")}}
           className="outline-none px-4 py-4 rounded-full text-white shadow-lg "
          style={{backgroundColor:"yellow"}}>Yellow</button>

           <button 
            onClick={()=>{setColor("violet")}}
           className="outline-none px-4 py-4 rounded-full text-white shadow-lg "
          style={{backgroundColor:"violet"}}>Violet</button>
    </div>
    </div>
  )
}

export default App
