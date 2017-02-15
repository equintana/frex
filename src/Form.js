import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    inputValue: 'Hola Mundo',
    select: 'value1'
  }

  onInputChange(event){
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  onSubmitButton(event){
    event.preventDefault();
    alert("Form data: " + JSON.stringify(this.state));
  }

  render(){
    return (
      <form action="">
      <label htmlFor="label">input</label>
      <input name="inputValue" onChange={this.onInputChange.bind(this)} value={this.state.inputValue} id="label" type="text"/>
      <label htmlFor="">Select</label>
      <select name="select" id="select"
      value={this.state.select}
      onChange={this.onInputChange.bind(this)}>
      <option value="value1">value 1</option>
      <option value="value2">value 2</option>
      <option value="value3">value 3</option>
      <option value="value4">value 4</option>
      </select>
      <button onClick={this.onSubmitButton.bind(this)}>Submit</button>
      </form>
    )
  }
}
