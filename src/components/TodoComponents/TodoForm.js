import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <form>
                <input value={this.props.tempTodo} onChange={this.props.handleChange} type='text' placeholder='...todo' name='todoEntry' />
                <button onClick={this.props.handleAdd} name='add-todo'>Add Todo</button>
                <button onClick={this.props.handleClear} name='clear'>Clear Completed</button>
            </form>
        );
    }

}

export default TodoForm;