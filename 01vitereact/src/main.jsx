import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'



//  function MyApp(){

//   return(
//     <div>
//       Custom react !
//     </div>
//   )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }
// const AnotherElement =(
//   <a href="https://www.google.com" target="_blank">
//     Click me to visit Google
//   </a>
// )

const anotherUser = "chai aur react";

const reactElement = React.createElement(
  'a',
{href: 'https://www.google.com', target: '_blank'},
'Click me to visit Google',
anotherUser

)


createRoot(document.getElementById('root')).render(
  // <MyApp />

  // <reactElement />
  // AnotherElement

  reactElement
  // < App />

)
// export default MyApp;
