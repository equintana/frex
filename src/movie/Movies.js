import React, { Component, PropTypes } from 'react';

import SearchForm from './SearchForm';
import MoviesList from './MoviesList';
import Loading from './Loading';

export default class Movies extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      searchType: 'name'
    }
  }

  render(){
    var showLoading = this.props.loading;
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
            <MoviesList movies={this.props.movies} selectMovie={this.props.selectMovie}/>
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
    this.props.searchMovies(targetValue);
  }
}

Movies.propTypes = {
  movies:        PropTypes.array,
  loading:       PropTypes.bool,
  searchMovies:  PropTypes.func
}

