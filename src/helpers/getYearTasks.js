export const getYearTasks = (tasks) =>{
    
    const years = Array.from({length: 10}, (_, index) => 2023 + index);

    let yearTasks = years.map(item => {
        return {
          id: crypto.randomUUID(),
          year: item,
          tasks: []
        }
      })
    
      for (let j = 0; j < yearTasks.length; j++) {
        for (let k = 0; k < tasks.length; k++) {
          const taskYear = new Date(tasks[k].date).getFullYear()
          if (taskYear === Number(yearTasks[j].year)) {
            yearTasks[j].tasks.push(tasks[k])
          }
        }    
      }
    
      return yearTasks
}