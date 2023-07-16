import React from 'react'

export default class Todo extends React.Component {
  handelClick = () => {
    console.log(this.props.todo.name, this.props.todo.id)
    this.props.handelToggle(this.props.todo.id);
  }
  
  render() {
    return (
      <li onClick={this.handelClick} key={this.props.todo.id}>{this.props.todo.name} {this.props.todo.completed ? <span> - completed </span> : <span></span>}</li>
    )
  }
}
