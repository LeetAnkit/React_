import { useState,  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)


  //let counter =5
 
  const addValue=()=>{
  // counter = counter+1;

   if(counter < 20){
       setCounter(counter+1);
    }
    else{
      setCounter("Max Out");
    }

    
  }

  const removeValue =()=>{

    if(counter >0){
       setCounter(counter-1);
    }

    else{
      setCounter("0");
    }
   
    

  
  }

  return (
    <>
     <h1>Ankit Kumar</h1>
     <h2>counter value : {counter}</h2>

     <button
     onClick={addValue}
     >Add Value</button>
     <br/>
     <br/>

     <button
     onClick={removeValue}
     >Remove Value</button>
     <p>footer:{counter} </p>
    </>
  )
}

export default App
