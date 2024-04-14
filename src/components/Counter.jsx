import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './Counter.css'

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <>
     
      <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1);
           console.log("increse 가 클릭됨");}}>+1</button>
        <button onClick={()=>{setCount(count-1);
        console.log("decrease가 클릭됨");}}>-1</button>
      </div>
    </>
  )
}

export default App
