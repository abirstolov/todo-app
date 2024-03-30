import './Tasks.css'

function Tasks() {
    return (
      <>
        {/* <ul>
            <li>Id</li>
            <li>Task</li>
            <li>Status</li>
            <li>Constrains</li>
        </ul> */}
        <div className="tasks">
            <div className="task">
                <div className="id">235</div>
                <div className="desc">Task 1 description</div>
                <div className="status">Blocked</div>
                <div className="constrains">Task [12, 382]</div>
                <div className="menu">:</div>
            </div>
            <div className="task highlight">
                <div className="id">432</div>
                <div className="desc"> Task 2 description</div>
                <div className="status">Todo</div>
                <div className="constrains">Time [8:00, 12:00]</div>
                <div className="menu">:</div>
            </div>
        </div>
      </>
    )
}
  
export default Tasks