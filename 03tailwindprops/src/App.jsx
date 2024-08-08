import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
      if(counter < 20){
        setCounter(counter + 1);
      }
  }

  const decrementCounter = () => {
      if(counter > 0){
        setCounter(counter - 1);
      }
  }


  return (
    <>
      <h1 className='bg-teal-100 p-5 text-3xl font-bold underline rounded-xl'>Hi! Mayur This Side...</h1>
      <br />
      <h3>Count : {counter}</h3>
      <div className='grid-cols-2 space-x-6 m-5'>
        <button className='btn-primery bg-violet-200 rounded-2xl' onClick={incrementCounter}>Increment</button>
        <button className='btn-secondary rounded-2xl' onClick={decrementCounter}>Decrement</button>
      </div>
    </>
  )
}

export default App
