import React from 'react';

import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        this.props.handleComplete(event, this.props.todo.id);
    }

    render() {
        return(
            <div style={{}} onClick={this.handleClick}>{this.props.todo.task}</div>
            {this.props.todo.completed ? <div style='text-decoration:line-through' onClick={this.handleClick}>{this.props.todo.task}</div> : <div onClick={this.handleClick}>{this.props.todo.task}</div>}
        );
    }

}


export default Todo;