/*
 * First example, creating custome components using the default
 * syntax
 *
 */

var ReactDom = require('react-dom');
var React = require('react');
var { Component, createElement } = React

class MyFirstComponent extends Component {
 render(){
   return createElement('span', null, this.props.title);
 }
}

function MySecondComponent( props ){
  return createElement('span', null, props.title);
}

ReactDom.render( createElement('h1', { className: 'hola', id: 'some_id'}, '1er ',
                                     createElement('span', null, '2do '),
                                     createElement( MyFirstComponent, { title: 'title class ' }),
                                     createElement( MySecondComponent, { title: 'title function ' })
                              )
                  ,document.getElementById('root')
               );


