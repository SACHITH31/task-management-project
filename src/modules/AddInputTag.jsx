import '../css/AddInputTag.css'
import trash from '../assets/trash.svg'

function AddInputTag () {
    return (
        <>
         <div className="subTasksContainer">
           
              <input type="text" placeholder="Enter Sub Task" className="subTask"></input>
              <img src= {trash} className='delete'></img>
         </div>
        </>
    )
}
export default AddInputTag