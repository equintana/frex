/*
 * Second example, using JSX to create custom components
 */

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class MyFirstComponent extends Component {
 render(){
   return <span>{this.props.title}</span>;
 }
}

MyFirstComponent.propTypes = {
  title: PropTypes.string.isRequired
}

MyFirstComponent.defaultProps = {
  title: ' defaults '
}


function MySecondComponent( props ){
  return <span>{props.title}</span>;
}

MySecondComponent.propTypes = {
  title: PropTypes.string
}

render(
  <h1 className='hola'>
     1er
     <span>2do </span>
     <MyFirstComponent title="title first class... "></MyFirstComponent>
     <MySecondComponent title="title second function... "></MySecondComponent>
  </h1>
  ,document.getElementById('root')
);

