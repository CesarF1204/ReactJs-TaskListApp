import React from 'react';

class TaskRow extends React.Component {
    doneBtnClickHandler = () => {
        this.props.doneTask(this.props.task);
    }
    deleteBtnClickHandler = () => {
        this.props.deleteTask(this.props.task);
    }
    render() {
        let {name, status} = this.props.task;
        return(
            <tr>
                <td>
                    {name}
                </td>
                <td id="actions">
                    {status === 'pending' ? <i className="far fa-check-circle" id="check_done" onClick={this.doneBtnClickHandler}></i> : null}
                    <i className="far fa-trash-alt" id="delete_task" onClick={this.deleteBtnClickHandler}></i>
                </td>
            </tr>
            
        )
    }
}

export default TaskRow;