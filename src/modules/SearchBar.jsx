import React, { useState } from 'react'
import AddTaskPopUp from './AddTaskPopUp'
import '../css/SearchBar.css'


function SearchBar() {
    const [addTaskPopUp, setAddTaskPopUp] = useState(false)
    let popUp = null;

    function handleAddTask() {
        setAddTaskPopUp(true)
    }


    if (addTaskPopUp === true) {
        popUp = <AddTaskPopUp />
    }

    return (
    <>
      <div className='searchBarContainer'>
        <input className='searchBar' type='text' placeholder='Search Tasks'></input>
        <button className='addTaskButton' onClick={handleAddTask}>Add Task</button>
        {popUp}
      </div>
    
    </>
  )
}

export default SearchBar