import React from 'react';

class AddTaskForm extends React.Component {
    state = {
        name: '',
        status: 'pending'
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addNewTask = () => {
        let newTask = {
            name: this.state.name,
            status: "pending"
        }
        this.props.addTask(newTask);
    }

    render() {
        return(
            <div>
                <label htmlFor="name">Task Name: </label>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.inputChangeHandler} />
                <input type="hidden" name="status" value={this.state.status} />
                <button className="add-item-btn" onClick={this.addNewTask}>+Add Task</button>
            </div>
        )
    }
}

export default AddTaskForm;