import { useState } from "react"
import AddInputTag from "./AddInputTag"
import '../css/AddTaskPopup.css'

function AddTaskPopUp (props) {
    const [addOneMoreTask, setAddOneMoreTask] = useState(1);
    const [tasksToggle, setTasksToggle] = useState(false);
    const [title, setTitle] = useState('');
    const [subTasks, setSubTasks] = useState(['']);

    function AddOneMoreTaskFunction() {
        setAddOneMoreTask(prev => prev + 1);
        setSubTasks([...subTasks, '']);
    }

    function handleSubTaskChange(index, value) {
        const newSubTasks = [...subTasks];
        newSubTasks[index] = value;
        setSubTasks(newSubTasks);
    }

    function closePopUp() {
        setTasksToggle(true);
    }

    return (
        <>
            {!tasksToggle && (
                <div className="addTaskPopUpContainer">
                    <div className="closeContainer">
                        <p className="close" onClick={props.handleCloseAddTask}>&times;</p>
                    </div>
                    <div className="allInputsContainer">
                        <div className="titleContainer">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                placeholder="Enter Title"
                                id="title"
                                className="title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="subTasksContainer">
                            {subTasks.map((task, index) => (
                                <AddInputTag
                                    key={index}
                                    index={index}
                                    value={task}
                                    onChange={handleSubTaskChange}
                                />
                            ))}
                        </div>
                        <div className="buttonsContainer">
                            <button className="submitButton" onClick={closePopUp}>Submit All</button>
                            <button className="addOneMoreTaskButton" onClick={AddOneMoreTaskFunction}>Add One More Task</button>
                        </div>
                    </div>
                </div>
            )}

            {tasksToggle && (
                <div className="AllTasksContainer">
                    <h3>{title}</h3>
                    <ul>
                        {subTasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default AddTaskPopUp;