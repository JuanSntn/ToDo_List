import React from 'react'
import { getYearTasks } from '../helpers/getYearTasks'

const Year = ({tasks}) => {
  const taskYear = getYearTasks(tasks)

  return (
    <section className='p-4'>
      {
        taskYear.map(item=>(
          <div key={item.id} className='border border-black rounded bg-gray-600 p-2 text-left mb-2 flex flex-col lg:flex-row justify-between  gap-2'>
      <div className='bg-gray-700 p-1 rounded min-w-[98px] text-center lg:h-fit lg:flex lg:flex-col shadow-sm shadow-slate-950  '>
        <span className='lg:mb-2 text-4xl font-medium'>{item.year}</span>
      </div>
      <div className='flex flex-col lg:flex-row gap-1 lg:justify-end '>
      {item.tasks.map(task => (
              <span key={task.id} className='text-black font-semibold px-2 rounded bg-gray-700 inline-block lg:h-fit shadow-sm shadow-slate-950 '>
                {task.tasks}
              </span>
            ))}
      </div>
    </div>

        ))
      }
    
  </section>
  )
}

export default Year