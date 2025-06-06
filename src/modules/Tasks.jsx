import React from 'react'

function Tasks(props) {
  return (
    <>
    <div className='AllTasksContainer'>
    <p>{props.title}</p>
    <p>{props.subTasksData}</p>
    </div>

    </>
  )
}

export default Tasks