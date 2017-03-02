import React, { Component } from 'react';

export default class Layout extends Component {
  constructor(){
    super();
      this.state = {
        selectedMovie: {}
      }
  }


  render(){
    return (
       <div>
         {this.props.children}
       </div>
     )
  }

  selectMovie = (evt) => {
    var targetValue = evt.target.value;
    var targetName = evt.target.name;
    console.warn(targetValue);
    console.warn(targetName);
    this.setState({
      selectMovie: {},
    });
  }
}

