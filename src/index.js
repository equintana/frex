/*
 * Third example, declaring and using components props.
 */

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

var items = [
  { name: "David",
    age: 30
  },
  { name: "Erlinis",
    age: 30
  },
  { name: "Peter",
    age: 31
  }
]


class List extends Component {
 render(){
   return (
     <ul>
     {this.props.children}
     </ul>
   )
 }
}

class ListItem extends Component {
  render(){
   return <li>{this.props.name}, age:  {this.props.age} </li>
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired
}


render(
  <List>
     { items.map( item => <ListItem key={item.name} name={item.name} age={item.age}></ListItem>) }
  </List>
  ,document.getElementById('root')
)
