import { use, useState } from "react"
import AddInputTag from "./AddInputTag"

import '../css/AddTaskPopup.css'
import Tasks from "./Tasks"

function AddTaskPopUp (props) {
    const [addOneMoreTask, setAddOneMoreTask] = useState(1)
    const [tasksToggle, setTasksToggle] = useState(false)
    const [titleTemp, setTitleTemp] = useState('')
    const [title, setTitle] = useState('')

    function AddOneMoreTaskFunction () {
        setAddOneMoreTask(addOneMoreTask+1)
    }
    
    function closePopUp() {
        setTasksToggle(true)
        setTitle(titleTemp)
        console.log(`titleTemp: ${titleTemp}, Title: ${title}`)
        // props.handleCloseAddTask()
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
                <input type="text" placeholder="Enter Title" id="title" className="title" onInput={(e) => setTitleTemp(e.target.value)}></input>
            </div>
            <div className="subTasksContainer">
                {temp}
            </div>
            <div className="buttonsContainer">
                <button className="submitButton" onClick={closePopUp} >Submit All</button>
                <button className="addOneMoreTaskButton" onClick={AddOneMoreTaskFunction }>Add One More Task</button>
            </div>
           </div>
          </div>
          {title}
          {tasksToggle &&  <Tasks title = {title}/>}
         
        </>
    )
}


export default AddTaskPopUp