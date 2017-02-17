import React, { Component, PropTypes } from 'react';
import SearchForm from './SearchForm';
import MoviesList from './MoviesList';

class Movies extends Component {
  constructor(props){
    super();
      this.state = {
        searchTerm: '',
        searchType: 'name',
        movies: props.movies
      }
  }

  render(){
    return(
      <div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          searchType={this.state.searchType}
          onChange={this.onChange}
        />
        <MoviesList movies={this.state.movies}/>
      </div>
    )
  }

  onChange = (evt) => {
    var targetValue = evt.target.value;
    var targetName = evt.target.name;
    this.setState({
      [targetName]: targetValue,
      movies: filterMovies(this.state.searchType, this.state.searchTerm, this.props.movies)
    });
  }

}

function filterMovies(field, term, movies){
  return movies.filter(function(item){

    return item[field].toLowerCase().includes(term.toLowerCase())
  });
}

Movies.propTypes = {
  movies: PropTypes.array
}

export default Movies;
