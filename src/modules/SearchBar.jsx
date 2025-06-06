import React, { useState } from 'react';
import AddTaskPopUp from './AddTaskPopUp';
import '../css/SearchBar.css';

function SearchBar() {
    const [addTaskPopUp, setAddTaskPopUp] = useState(false);
    const [allTasks, setAllTasks] = useState([]);

    function handleAddTask() {
        setAddTaskPopUp(true);
    }

    function handleCloseAddTask() {
        setAddTaskPopUp(false);
    }

    function handleSaveTask(newTask) {
        setAllTasks([...allTasks, newTask]);
        setAddTaskPopUp(false);
    }

    return (
        <>
            <div className='searchBarContainer'>
                <input className='searchBar' type='text' placeholder='Search Tasks' />
                <button className='addTaskButton' onClick={handleAddTask}>Add Task</button>
            </div>

            {addTaskPopUp && <AddTaskPopUp onSaveTask={handleSaveTask} onClose={handleCloseAddTask} />}

            <div className="AllTasksContainer">
                {allTasks.map((task, i) => (
                    <div key={i} className="singleTask">
                        <h3>{task.title}</h3>
                        <ul>
                            {task.subTasks.map((sub, j) => <li key={j}>{sub}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SearchBar;
