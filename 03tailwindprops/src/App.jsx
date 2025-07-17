import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  let obj1={
    Name : " Ankit Kumar",
    age : 21
  }
  let newArr =[1,2,3,4]
//in this image tag is always closing tag
  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl' > Ankit Kumar Tailwind </h1>
               <br/>
 <Card username ="Ankit Kumar" price = "$43000" />
        <br/>
        <Card username= "Raj" price = "$54000"/>
        
        
       
  
    </>
  )
}

export default App
