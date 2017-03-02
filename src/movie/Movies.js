import React, { Component, PropTypes } from 'react';
import Request from 'superagent';

import SearchForm from './SearchForm';
import MoviesList from './MoviesList';
import Loading from './Loading';

export default class Movies extends Component {
  constructor(props){
    super();
      this.state = {
        searchTerm: '',
        searchType: 'name',
        movies: [],
        loading: false,
        error: ""
      }
  }

  componentDidMount(){
    this.searchMovies("start");
  }

  searchMovies(queryTerm){
    if (queryTerm){
      this.setState({ loading: true });
      var API_KEY = "0c33d41d79f487cb8d4a58ae46e663e0";
      var url = "https://api.themoviedb.org/3/search/movie?query="+queryTerm+"&api_key="+API_KEY;
      Request.get(url)
        .then((response) => { return response.body.results; })
        .then((data) => {
          this.setState({ movies: data, loading: false }) })
        .catch((errorMessage) => {
          this.setState({ error: errorMessage });
        });
    }
  }

  render(){
    var showLoading = this.state.loading;

    return(
      <div>
        <div className="panel panel-default">
	  <SearchForm
	    searchTerm={this.state.searchTerm}
	    searchType={this.state.searchType}
	    onChange={this.onChange}
	  />
        </div>

        { (showLoading) ? (
            <Loading/>
          ) : (
            <MoviesList movies={this.state.movies}/>
          )
        }
      </div>
    )
  }

  onChange = (evt) => {
    var targetValue = evt.target.value;
    var targetName = evt.target.name;
    this.setState({
      [targetName]: targetValue,
    });
    this.searchMovies(targetValue);
  }

}


Movies.propTypes = {
  movies: PropTypes.array,
}

// function filterMovies(field, term, movies){
//   return movies.filter(function(item){
//     return item[field].toLowerCase().includes(term.toLowerCase())
//   });
// }

