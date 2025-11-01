

import './App.css'
import Card from './components/Card.jsx'
function App() {
  // const myobj = {
  //   name: "shotu and akshu",
  //   channel: "react js",
  //   course: "tailwindcss"
  // }

  // const newArr = [1,2,3,4,5,6,7,8,9];
  

  return (
    <>
    <h1 className='bg-green-400 mb-4'>tailwindcss</h1>

    {/* <Card channel="chai aur code" another={newArr}/>  */}

<Card username="Akshu" btnText="Click Me"/>
<Card username="Shotu" btnText="Visit Me"/>



  
    


    </>
  );
}


export default App
