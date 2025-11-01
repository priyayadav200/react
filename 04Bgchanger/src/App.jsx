import { useState } from "react"



function App() {
  const [Color , SetColor] = useState("olive")
  

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:Color}}>


<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">

  <div className="flex flex-wrap justify-center gap-3 shadow-lg p-4 bg-white/30 rounded-xl"> 
  <button onClick={() => SetColor("red")}
  
  className="outline-none  px-4 py-1 rounded-full text-white shadow-lg
   "
   style= {{backgroundColor:"red"}}>
    Red

  </button>
  <button onClick={() => SetColor("green")}
  
  className="outline-none  px-4 py-1 rounded-full text-white shadow-lg
   "
   style= {{backgroundColor:"green"}}>
   Green

  </button>
  <button onClick={() => SetColor("blue")}
  
  className="outline-none  px-4 py-1 rounded-full text-white shadow-lg
   "
   style= {{backgroundColor:"blue"}}>
  Blue

  </button>
  <button onClick={() => SetColor("olive")}
  
  className="outline-none  px-4 py-1 rounded-full text-white shadow-lg
  "
   style= {{backgroundColor:"olive"}}>
    Olive

  </button>
  <button onClick={() => SetColor("gray")}
  
  className="outline-none  px-4 py-1 rounded-full text-white shadow-lg
   "
   style= {{backgroundColor:"gray"}}>
    Gray

  </button>
  <button onClick={() => SetColor("yellow")}
  
  className="outline-none  px-4 py-1 rounded-full text-black shadow-lg
"
   style= {{backgroundColor:"yellow"}}>
    Yellow

  </button>
  <button onClick={() => SetColor("pink")}
  
  className="outline-none  px-4 py-1 rounded-full text-black shadow-lg
  "
   style= {{backgroundColor:"pink"}}>
    Pink

  </button>
  <button onClick={() => SetColor("purple")}
  
  className="outline-none  px-4 py-1 rounded-full text-white shadow-lg
   "
   style= {{backgroundColor:"purple"}}>
    Purple

  </button>
  <button onClick={() => SetColor("lavender")}
  
  className="outline-none  px-4 py-1 rounded-full text-black shadow-lg
   "
   style= {{backgroundColor:"lavender"}}>
    Lavender

  </button>
  <button onClick={() => SetColor("white")}
  
  className="outline-none  px-4 py-1 rounded-full text-black shadow-lg
   "
   style= {{backgroundColor:"white"}}>
white

  </button>
  <button onClick={() => SetColor("black")}
  
  className="outline-none  px-4 py-1 rounded-full text-white shadow-lg
   "
   style= {{backgroundColor:"black"}}>
   black

  </button>
  </div>
  </div>
    </div>
      
    </>
  )
}

export default App
