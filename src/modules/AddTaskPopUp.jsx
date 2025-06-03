import { useState } from "react"
import AddPTag from "./AddPTag"

import '../css/AddTaskPopup.css'

function AddTaskPopUp () {
    const [addOneMoreTask, setAddOneMoreTask] = useState(1)

    function AddOneMoreTaskFunction () {
        setAddOneMoreTask(addOneMoreTask+1)
    }

    let temp = []
    for (let i = 0; i < addOneMoreTask; i++) {
      temp.push(<AddPTag key={i} />)
    }

    return (
        <>
          <div className="addTaskPopUpContainer">
            <div className="titleContainer">
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder="Enter Title" id="title" className="title"></input>
            </div>
            <div className="subTasksContainer">
                {temp}
            </div>
            <div className="buttonsContainer">
                <button>Submit All</button>
                <button onClick={AddOneMoreTaskFunction}>Add One More Task</button>
            </div>
          </div>
        </>
    )
    
}
export default AddTaskPopUp