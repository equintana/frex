import React, { Component, PropTypes } from 'react';
import PersonContainer from './PersonContainer';

class PeopleContainer extends Component {

  render(){
    return (
      <div>
        {
        this.props.people.map( item=>
          <PersonContainer name={item.name} age={item.age} occupation={item.occupation} image_url={item.image_url}/>
        )
        }
      </div>
      );
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.array
}

export default PeopleContainer;
