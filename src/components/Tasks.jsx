import './Tasks.css'

function Tasks() {
    const tasks = [
        {
            id: 235,
            desc: 'Task 1 description',
            status: 'Blocked',
            constrains: 'Task [12, 382]'
        },
        {
            id: 432,
            desc: 'Task 2 description',
            status: 'Todo',
            constrains: 'Time [8:00, 12:00]'
        }
    ]
    let tasksElements = tasks.map(task => (
        <div className="task">
            <div className="id">{task.id}</div>
            <div className="desc">{task.desc}</div>
            <div className="status">{task.status}</div>
            <div className="constrains">{task.constrains}</div>
            <div className="menu">:</div>
        </div>
    ))
    return (
      <>
        <div className="tasks">
            <div className="new">
                <div className='inputContainer'>
                    <input type="text" name="newTask" id="newTaskInput" placeholder='Add new task' />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            {tasksElements}
        </div>
      </>
    )
}
  
export default Tasks