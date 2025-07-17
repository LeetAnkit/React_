import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  // this is like constructors
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("")


  //useRef Hook

  const passRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+{}[]~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassWordToClip = useCallback(()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,9);
      window.navigator.clipboard.writeText(Password)    //important point 
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-screen min-h-screen flex items-center justify-center bg-gray-900'>
        <div className='w-full max-w-md shadow-md rounded-lg px-6 py-8 bg-gray-700'>
          <h2 className='text-white text-center text-3xl font-semibold mb-6 my-3'>
            Password Generator
          </h2>
          <div className="flex shadow rounded-lg overflow-hidden">
            <input
              type="text"
              value={Password}
              className='outline-none w-full py-2 px-4 text-lg text-gray-800 bg-white'
              placeholder='Password'
              readOnly

              ref={passRef}
            />

            <button
            onClick={copyPassWordToClip}
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>copy</button>

            {/* <button className='outline-none bg-amber-300 text-white px-3 py-0.5 shrink-0 hover:bg-amber-400 active:bg-amber-500 transition-colors duration-20'>copy</button> */}
          </div>

        
        <div className ='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type ="range"
           min={6}
           max={100}
           value={length}

           className='cursor-pointer'
          onChange={(e) =>  {
            setlength(e.target.value)
          }}
            />
            
            <label>
              Length: {length}
              </label>
              
              </div>
              <div className='flex items-center gap-x-1'>
                 <input
                    type ="checkbox"
                    defaultChecked={numberAllowed}
                    if ="numberInput"

                       className='cursor-pointer'
                           onChange={() =>  {
                            setnumberAllowed((prev) => !prev)
                         }}
            />
            <label>
              Numbers
            </label>

              </div>

              <div className='flex items-center gap-x-1'>
                 <input
                    type ="checkbox"
                    defaultChecked={charAllowed}
                    if ="Charcater Input"

                       className='cursor-pointer'
                           onChange={() =>  {
                            setnumberAllowed((prev) => !prev)
                         }}
            />
            <label>
             Characaters
            </label>

              </div>

              
        </div>
        </div>
      </div>
    </>
  )
}

export default App
