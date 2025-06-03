import { useState } from "react"
import AddInputTag from "./AddInputTag"

import '../css/AddTaskPopup.css'

function AddTaskPopUp (props) {
    const [addOneMoreTask, setAddOneMoreTask] = useState(1)

    function AddOneMoreTaskFunction () {
        setAddOneMoreTask(addOneMoreTask+1)
    }

    let temp = []
    for (let i = 0; i < addOneMoreTask; i++) {
      temp.push(<AddInputTag key={i} />)
    }

    return (
        <>
          <div className="addTaskPopUpContainer">
            <div className="closeContainer" >
                <p className="close" onClick={props.handleCloseAddTask}>&times;</p>
            </div>
           <div className="allInputsContainer">
             <div className="titleContainer">
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder="Enter Title" id="title" className="title"></input>
            </div>
            <div className="subTasksContainer">
                {temp}
            </div>
            <div className="buttonsContainer">
                <button className="submitButton" onClick={props.handleCloseAddTask} >Submit All</button>
                <button className="addOneMoreTaskButton" onClick={AddOneMoreTaskFunction }>Add One More Task</button>
            </div>
           </div>
          </div>
        </>
    )
    
}


function DisplayTasks () {

}

export default AddTaskPopUp