import '../css/AddInputTag.css';

function AddInputTag({ index, value, onChange }) {
    return (
        <div className="subTasksContainer">
            <input
                type="text"
                placeholder="Enter Sub Task"
                className="subTask"
                value={value}
                onChange={(e) => onChange(index, e.target.value)}
            />
        </div>
    );
}

export default AddInputTag;
