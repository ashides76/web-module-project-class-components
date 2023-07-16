import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  handelSubmit = (event) => {
    console.log(this.props);
    event.preventDefault();
    this.props.handelAdd(this.state.input);
    this.setState({
      input: ''
    })
  }
  handelChange = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }
  render() {
    return (
      <form>
        <input onChange={this.handelChange}/>
        <button onClick={this.handelSubmit}>Add</button>
        <button onClick={this.props.handelClear}>Clear</button>
      </form>
    )
  }
}
