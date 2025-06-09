import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(5)
// let counter = 5
const addvalue =()=>{
  if(counter<=19){
  console.log("clicked" ,counter);
  counter = counter + 1
  setcounter(counter)
}else {
  console.log("limit is crossed");
  
}

}
const removevalue = () =>{
 
  if(counter!=0){
     setcounter(counter-1)
  }else{
    console.log("limit is crossed");
    
  }
}
  return (
    <>
     <h1>Chai or react</h1>
     <h2>Counter value : {counter} </h2>
     <button onClick={addvalue}>Add value</button>
     <br/>
     <button onClick={removevalue}>remove value</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
