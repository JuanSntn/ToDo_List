import React from 'react'
import { useState } from 'react';
import { CiTextAlignLeft } from "react-icons/ci";


const Form = ({dateM, tasks, setTasks}) => {
  const [val, setVal] = useState("")

  const handleInput = (e) => {
    e.preventDefault()

    const newTask={
      id: crypto.randomUUID(),
      date: dateM,
      tasks: val,
      done: false
    }

    setTasks([...tasks, newTask])
    setVal("")

  }
  return (
    <section className='max-w-[450px] m-auto my-3 px-4 '>
      <div className='border border-black rounded bg-gray-600 flex items-center p-2'>
      <span className='text-black mr-2'> <CiTextAlignLeft/> </span>
      <form className='w-full' onSubmit={handleInput}>

        <input className='w-full bg-transparent outline-none' 
        type="text"
        placeholder='Añade una tarea'
        value={val}
        onChange={e=>setVal(e.target.value)}
        />
      </form>
      </div>
    </section>
  )
}

export default Form