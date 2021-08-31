import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            task: e.target.value
        })
    }

    handleClickAdd = e => {
        e.preventDefault();
        this.props.add(this.state.task);
        this.setState({
            ...this.state,
            task: ''
        })
    }

    handleClickDelete = e => {
        e.preventDefault();
        this.props.delete()
    }

    render() {
        return(
            <div className='todo-form-container'>
                <form className='todo-form'>
                    <input placeholder='...todo' name='task' onChange={this.handleChange} value={this.state.task}/>
                    <button onClick={this.handleClickAdd}>add</button>
                    <button onClick={this.handleClickDelete}>clear completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;

