import { useState } from 'react';
import './App.css'



 

function App() {
  
 

 let [Counter , setCounter] = useState(0);
  function incrValue(){
    if(Counter <20){
    Counter = Counter + 1;
    setCounter( Counter );
    console.log("increasing value by 1" , Counter );
    }
    else{
      alert("Counter value cannot be greater than 20");
    }
  }
  
  
  
  const decrValue = () => {

    if(Counter >0){
   Counter = Counter - 1;
    setCounter( Counter );
    }
    else{
      alert("Counter value cannot be negative");
    }
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {Counter}</h2>
    <button onClick={incrValue}>increase value {Counter} </button>
    <br />
    <button onClick={decrValue}>Decrease value {Counter} </button>
      
    </>
  )
}

export default App
