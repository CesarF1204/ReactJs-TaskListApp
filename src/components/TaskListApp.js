import React from 'react';
import AddTaskForm from './AddTaskForm';
import TaskRow from './TaskRow';

class TaskListApp extends React.Component {
    state = {
        tasks: [
            {   
                id: 1,
                name: "eat",
                status: "pending"},
            {   
                id: 2,
                name: "code",
                status: "pending"},
            {   
                id: 3,
                name: "sleep",
                status: "done",
            },
        ],
    }
    changeDisplay = (status) => {
        this.setState({
            filter: status
        });
    }
    addTask = (newTask) => {
        newTask.id = this.state.tasks.length + 1;
        let tasksCopy = [...this.state.tasks];
        tasksCopy.push(newTask);
        console.log(tasksCopy)
        this.setState({
            tasks: tasksCopy
        })
    }
    deleteTask = (task) => {
        let tasksCopy = [...this.state.tasks];
        tasksCopy = tasksCopy.filter(i => i.id !== task.id);
        this.setState({
            tasks: tasksCopy
        });
    }
    doneTask = (task) => {
        let tasksCopy = [...this.state.tasks];
        let index = tasksCopy.findIndex( i => i.id === task.id);
        tasksCopy[index].status = 'done';
        this.setState({
            tasks: tasksCopy,
        });
    }

    render() {
        let pendingTask = this.state.tasks.filter(task => task.status === 'pending')
        let pendingTaskList = pendingTask.map( task =>
            <TaskRow key={task.id} task={task} deleteTask={this.deleteTask} doneTask={this.doneTask} />    
        )
        let doneTask = this.state.tasks.filter(task => task.status === 'done')
        let doneTaskList = doneTask.map( task =>
            <TaskRow key={task.id} task={task} deleteTask={this.deleteTask} />    
        )
        
        return (
            <div>
                <div>
                    < AddTaskForm addTask={this.addTask} />
                </div>
                <div id="table-container">
                {/* Pending Tasks Table */}
                {pendingTask == '' ? 'No Pending Task' :
                    <table border="1">
                        <thead>
                            <tr>
                                <th colSpan="2">Pending Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingTaskList}
                        </tbody>
                    </table>
                }
                {/* Done Tasks Table */}
                {doneTask == '' ? null :
                    <table border="1">
                        <thead>
                            <tr>
                                <th colSpan="2">Done Tasks</th>
                            </tr>
                        </thead>
                        <tbody className="done-task-container">
                            {doneTaskList}
                        </tbody>
                    </table>
                }
                </div>
            </div>
        )
    }
}
export default TaskListApp;