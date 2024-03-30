
function DoneTasks() {
    const doneTasks = [
        {
            id: 34,
            desc: 'Task 10 description',
            constrains: 'Completed at 05/04/2024'
        },
        {
            id: 21,
            desc: 'Task 20 description',
            constrains: 'Completed at 02/04/2024'
        }
    ]
    let tasksElements = doneTasks.map(task => (
        <div className="task">
            <div className="id">{task.id}</div>
            <div className="desc">{task.desc}</div>
            <div className="constrains">{task.constrains}</div>
            <div className="menu">:</div>
        </div>
    ))
    return (
      <>
        <div className="tasks">
            {tasksElements}
        </div>
      </>
    )
}
  
export default DoneTasks