import React, { Component, PropTypes } from 'react';
import Timer from './Timer';

class TimerContainer extends Component {
  constructor(){
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount(){
   this.interval = setInterval(() => {
     this.setState({
       time: new Date().toLocaleTimeString()
     })
   }, 1000);
  }

  render() {
    return <Timer time={this.state.time}/>
  }
}

TimerContainer.propTypes = {
  time: PropTypes.string.isRequired
}


export default TimerContainer;
