import React, { Component, PropTypes } from 'react';

class MoviesList extends Component {

  render(){
    return (
      <ul>
      {
        this.props.movies.map( item=>
          <li>
            <div>
            <img src={item.poster_path} height="60" width="60" alt="-"/>
            <p>{item.title}</p>
            <p>{item.overview}</p>
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
