import React from 'react'
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: uuid(), // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: uuid(),
          completed: false
        },
        {
          name: 'Walk the dog',
          id: uuid(),
          completed: true
        },
      ]
    }
  }
  handelClear = (event) => {
    //1. setState
    //2. loop through all todos
    //3. remove all todos this have completed !== true
    //4. save filtered todos to state
    event.preventDefault();
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(todo => todo.completed !== true)
    })
  }

  handelAdd = (task) => {
    //1. setState
    //2. change todos
    //3. make a copy todos
    //4. add a new todo to the end
    const newTodo = {
      name: task,
      id: uuid(),
      completed: false,
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handelToggle = (clickedId) => {
    console.log('clear');
    //1. setState
    //2. change todos
    //3. find the todo that we click on
    //4. filp the value of completed for that todo
    //5. keep all other todo the same
    this.setState({
      ...this.state, 
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    })
  }

  render() {
    const { todos } = this.state;
    console.log(todos);

    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos={todos} handelToggle={this.handelToggle} /> 
        <Form handelClear={this.handelClear} handelAdd={this.handelAdd}/>
      </div>
    )
  }
}
