import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      tempTodo: null,
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = event => {
    event.preventDefault();
    this.setState((props, state) => {
      let newTask = {
        task: this.state.tempTodo,
        id: Date.now(),
        completed: false
      }

      let tempTodos = this.state.todos;

      tempTodos.push(newTask)
      this.state.tempTodo = '';
      this.setState({todos: tempTodos});
    });
  }

  handleClear = event => {
    event.preventDefault();
    let currentTasks = this.state.todos.filter(todo => !todo.completed);
    
    this.setState({todos: currentTasks});
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({tempTodo: event.target.value});
  }

  handleComplete = (event, taskId) => {
    event.preventDefault();
    event.target.classList.toggle('complete');

    this.setState(items => {
      const tempTodos = items.todos.map(todo => {
        if(taskId === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {tempTodos};
    }
    );
  }
  

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList handleComplete={this.handleComplete} todos={this.state.todos} />
        <TodoForm tempTodo={this.state.tempTodo} handleChange={this.handleChange} handleAdd={this.handleAdd} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
