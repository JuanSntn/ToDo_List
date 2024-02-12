import { getMonthTasks } from "../helpers/getMonthTasks"

const Month = ({tasks}) => {
  const months = getMonthTasks(tasks)
  return (

    

    <section className='p-1'>
      {
      months.map(item =>(

          <div key={item.id} className='border border-black rounded bg-gray-600 p-2 text-left mb-2 flex flex-col lg:flex-row justify-between gap-2 shadow-sm shadow-slate-950 '>
         <div className='bg-gray-700 p-1 rounded w-[130px] h-[fit-content] text-center shadow-sm shadow-slate-950 '>
          <span className='text-4xl font-medium  '>{item.month}</span>
          <span style={{ writingMode: "vertical-lr" }} className='text-xs font-semibold'>
            {item.year}
          </span>
        </div>


      <div className='flex flex-col lg:flex-row gap-1 lg:justify-end overflow-x-auto'>
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

export default Month