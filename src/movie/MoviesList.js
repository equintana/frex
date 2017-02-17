import React, { Component, PropTypes } from 'react';

class MoviesList extends Component {

  render(){
    return (
      <ul>
      {
        this.props.movies.map( item=>
          <li>
            <div>
            <img src={item.image} height="60" width="60" alt="-"/>
            <p>{item.name}</p>
            <p>{item.description}</p>
            </div>
          </li>
         )
      }
      </ul>
    )
  }
}


MoviesList.propTypes = {
  movies: PropTypes.array
}

export default MoviesList;
