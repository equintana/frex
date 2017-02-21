import React, { Component, PropTypes } from 'react';
import SearchForm from './SearchForm';
import MoviesList from './MoviesList';
import Request from 'superagent';

class Movies extends Component {
  constructor(props){
    super();
      this.state = {
        searchTerm: '',
        searchType: 'name',
        movies: []
      }
  }

  componentWillMount(){
  }

  search(term){
    console.log(term);
      var API_KEY = "0c33d41d79f487cb8d4a58ae46e663e0"
      var url = "https://api.themoviedb.org/3/search/movie?query="+term+"&api_key="+API_KEY
      Request.get(url).then((response) => {
        // console.log("respo: ", response);
        // return response.body.results
        this.setState({
          movies: response.body.results
        })
     });
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
    });
    this.search(targetValue);
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
