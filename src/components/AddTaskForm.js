// import React from 'react';
import { useState } from 'react';

const AddTaskForm = (props) => {
    const [name, setName] = useState('');

    const addNewTask = () => {
        let newTask = {
            name: name,
            status: "pending"
        }
        if(name.trim() === '') {
            alert('Please input a valid task.');
        } else {
            props.addTask(newTask);
            setName('');
        }
    }

    return(
        <div>
            <label htmlFor="name">Task Name: </label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="add-item-btn" onClick={addNewTask}>+Add Task</button>
        </div>
    )
}

// CLASS-BASED COMPONENT
// class AddTaskForm extends React.Component {
//     state = {
//         name: '',
//         status: 'pending'
//     }
//     inputChangeHandler = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     addNewTask = () => {
//         let newTask = {
//             name: this.state.name,
//             status: "pending"
//         }
//         this.props.addTask(newTask);
//     }

//     render() {
//         return(
//             <div>
//                 <label htmlFor="name">Task Name: </label>
//                 <input type="text" name="name" id="name" value={this.state.name} onChange={this.inputChangeHandler} />
//                 <input type="hidden" name="status" value={this.state.status} />
//                 <button className="add-item-btn" onClick={this.addNewTask}>+Add Task</button>
//             </div>
//         )
//     }
// }

export default AddTaskForm;