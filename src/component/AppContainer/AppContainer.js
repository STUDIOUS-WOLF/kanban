import React from 'react'
import TaskContainer from '../TaskContainer/TaskContainer'
import './AppContainer.css'
function AppContainer() {
  const [taskContainer,setTaskContainer]=React.useState([<TaskContainer addTaskContainer={addTaskContainer}/>])
  return (
    <div className='appContainer'>
        {taskContainer}
    </div>
  )
   function addTaskContainer() {
    setTaskContainer(prevTaskContainer => [
      ...prevTaskContainer,
      <TaskContainer addTaskContainer={addTaskContainer} />
    ]);
  }
}

export default AppContainer