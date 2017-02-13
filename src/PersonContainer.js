import React, { Component, PropTypes } from 'react';
import Person from './Person';
import TimerContainer from './TimerContainer';

class PersonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:       props.name,
      age:        props.age,
      occupation: props.occupation,
      image_url:  props.image_url,
      time:       new Date().toLocaleTimeString(),
      captures:  []
    }

    this.captureTime = this.captureTime.bind(this);
  }

  captureTime(evt){
     evt.preventDefault();
     console.log('Name.', this.state.name);
     console.log('Time.', this.state.time);
     this.setState({
       captures: this.state.captures.concat([this.state.time])
     });
     console.log('Capture.', this.state.captures);
  }

  componentDidMount(){
   this.interval = setInterval(() => {
     this.setState({
       time: new Date().toLocaleTimeString()
     })
   }, 1000);
  }

  render() {
    return (
        <div>
          <Person name={this.state.name} age={this.state.age} occupation={this.state.occupation} image_url={this.state.image_url}></Person>
          <button onClick={this.captureTime}> Capture Time </button>
          <ul>{ this.state.captures.map( t => <li>{t}</li>) }</ul>
          <TimerContainer time={this.state.time}></TimerContainer>
        </div>
      )
  }
}


PersonContainer.propTypes = {
  name:       PropTypes.string.isRequired,
  age:        PropTypes.number,
  occupation: PropTypes.string,
  image_url:  PropTypes.string
}


export default PersonContainer;


