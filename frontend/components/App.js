import React from 'react'
import { v4 as uuid } from 'uuid';

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
  render() {
    const { todos } = this.state;
    console.log(todos);

    return (
      <div>
        <h1>Todo App</h1>
        <ul>
          {
            todos.map((todo) => {
              return (<li key={todo.id}>{todo.name} {todo.completed ? <span> - completed </span> : <span></span>}</li>)
            })
          }
        </ul>
        <form>
          <input/>
          <button>Add</button>
          <button>Clear</button>
        </form>
      </div>
    )
  }
}
