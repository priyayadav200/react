import { useCallback, useEffect, useState  , useRef} from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed  , setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass= "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed){
    str += "0123456789";
  }
  if(CharAllowed){
    str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }
  
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random()
                * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
},[length, numberAllowed, CharAllowed ,setPassword] )

const CopyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0 ,10);
window.navigator.clipboard.writeText(Password);
},
[Password]

)
 

useEffect(() => {
  generatePassword()
}, 
[length , numberAllowed , CharAllowed , generatePassword])


  return (
    <>


    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
    <h1 className="text-4xl text-center text-white my-4">Password Generator</h1>

<div className="mb-4">
  <input
  type="text"
value={Password}
className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-800 text-white"
placeholder='password'
readOnly
ref={passwordRef}

  
  />
  <button
  onClick={CopyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
    Copy
  </button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex item-center gap-x-1">

      <input 
      type="range"
      min={4}
      max={100}
      value={length}
      className="cursor-pointer"
      onChange={(e) => setLength(e.target.value)}
      />

      <label>Length: {length}</label>
      


   
      </div>

      <div className="flex items-center gap-x-1">
      <input 
      type="checkbox"
      defaultchecked={numberAllowed}
      id="numberInput"
      onChange={() => setNumberAllowed((prev) => !prev)}
      />
      <label>Numbers</label>
      </div>
      
      <div className="flex items-center gap-x-1">
      <input 
      type="checkbox"
      defaultChecked={CharAllowed}
      id="characterInput"
      onChange={() => setCharAllowed((prev) => !prev)}
      />
      <label htmlFor="characterInput">Characters</label>
      </div>
  </div>
    </div>
      
    </>
  )
}

export default App
