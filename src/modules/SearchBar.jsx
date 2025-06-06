import React, { useState } from 'react';
import AddTaskPopUp from './AddTaskPopUp';
import '../css/SearchBar.css';

function SearchBar() {
    const [addTaskPopUp, setAddTaskPopUp] = useState(false);

    function handleAddTask() {
        setAddTaskPopUp(true);
    }

    function handleCloseAddTask () {
        setAddTaskPopUp(false);
    }

    return (
        <>
            <div className='searchBarContainer'>
                <input className='searchBar' type='text' placeholder='Search Tasks' />
                <button className='addTaskButton' onClick={handleAddTask}>Add Task</button>
                {addTaskPopUp && (
                    <AddTaskPopUp handleCloseAddTask={handleCloseAddTask} />
                )}
            </div>
        </>
    );
}

export default SearchBar;