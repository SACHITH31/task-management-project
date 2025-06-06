import { useState } from "react";
import AddInputTag from "./AddInputTag";
import '../css/AddTaskPopup.css';

function AddTaskPopUp({ onSaveTask, onClose }) {
    const [title, setTitle] = useState('');
    const [subTasks, setSubTasks] = useState(['']);

    function AddOneMoreTaskFunction() {
        setSubTasks([...subTasks, '']);
    }

    function handleSubTaskChange(index, value) {
        const updated = [...subTasks];
        updated[index] = value;
        setSubTasks(updated);
    }

    function handleSubmit() {
        if (title.trim() !== '' && subTasks.some(t => t.trim() !== '')) {
            onSaveTask({ title, subTasks });
        }
    }

    return (
        <div className="addTaskPopUpContainer">
            <div className="closeContainer">
                <p className="close" onClick={onClose}>&times;</p>
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
                    <button className="submitButton" onClick={handleSubmit}>Submit All</button>
                    <button className="addOneMoreTaskButton" onClick={AddOneMoreTaskFunction}>Add One More Task</button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskPopUp;
