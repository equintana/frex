import React, { Component } from 'react';
import Request from 'superagent';
import { Route } from 'react-router-dom';
import Movies from './Movies';
import MovieDetail from './MovieDetail';

export default class Layout extends Component {
  constructor(){
    super();
      this.state = {
        movies: [],
        selectedMovie: {},
        loading: false,
        error: ""
      }

      this.searchMovies = this.searchMovies.bind(this);
      this.selectMovie = this.selectMovie.bind(this);
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

  selectMovie(movieId){
    return this.findMovie(movieId)
  }

  findMovie(movieId){
    return this.state.movies.find(function(movie){
      return movie.id.toString() === movieId
    });
  }

  render(){
    return ( <div>
         <Route path="/movies" exactly render={({match})=>
           <Movies movies={this.state.movies}
             selectedMovie={this.state.selectedMovie}
             selectMovie={this.selectMovie}
             loading={false}/>
           }/>
         <Route path="/movies/:id" component={ (props) => (
            <MovieDetail {...props} selectMovie={this.selectMovie} selectedMovie={this.selectedMovie}/>
         )}/>
       </div>
     )
  }
}

