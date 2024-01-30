import { useState, useEffect } from 'react'
import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTask from './components/ListTask'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'
import './App.css'



function App() {
  const [dateM, setDateM] = useState(new Date())

  const data = JSON.parse(localStorage.getItem
    ('tasks'))

  const [tasks, setTasks] = useState (data?data:[])
  const [tab, setTab] = useState('day')

  //console.log(tasks);

  useEffect(()=>{

    localStorage.setItem('tasks', JSON.stringify 
    (tasks))

  }, [tasks])

  return (
    <>
  <main className="h-screen bg-slate-900 ">
    <div className="h-1/2 w-full flex flex-col items-center m-auto ">
      <div className="w-1/2 p-4 flex items-start my-4">
        <h1 className="text-4xl font-semibold text-red-500 mt-0 ">todo</h1>
      </div>
      <div className="flex justify-center items-center space-x-8 w-full  ">
        <div className="w-40 h-80 p-4 bg-blue1 rounded-lg shadow-lg shadow-slate-950 ">
          <Header tab={tab} setTab={setTab} />
        </div>
        <div className="w-1/2 h-80 p-4 bg-blue1 rounded-lg shadow-lg shadow-slate-950 ">
          {tab === 'day' && (
            <>
              <Day  dateM={dateM} setDateM={setDateM} />
              <Form  
              dateM={dateM}
              tasks={tasks}
              setTasks = {setTasks}
              />
              <div className='overflow-auto h-32 sm:h-35 md:h-40 lg:h-40 xl:h-40 custom-scrollbar'>
              <ListTask 
            dateM={dateM}
            tasks={tasks}
            setTasks = {setTasks}
                    />
              </div>
              
              
            </>
          )}
         
          {tab === 'week' && <Week  tasks={tasks} />}


          <div className='overflow-auto h-[280px] sm:h-60 md:h-[280px] lg:h-60 xl:h-[280px] custom-scrollbar '>
          
          {tab === 'month' && <Month tasks={tasks} />}
          {tab === 'year' && <Year tasks={tasks} />}
          </div>
          
        </div>
      </div>
    </div>
  </main>




    </>
  )
}

export default App
