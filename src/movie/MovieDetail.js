import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Request from 'superagent';
import Loading from './Loading';

export default class MovieDetail extends Component {

  componentDidMount(){
    var nav_params = this.props;
    var movie_id = nav_params.match.params.id;
    if (nav_params.location.state && nav_params.location.state.fromMoviesList){
     this.setState({ movie: this.props.selectMovie(movie_id) });
    } else {
      this.getMovieById(movie_id);
    }
  }

  render(){
    var styles = {
	bsCallout: {
	  borderColor: "#eee",
	  borderImage: "none",
	  borderRadius: "3px",
	  borderStyle: "solid",
	  borderWidth: "1px 1px 1px 5px",
	  marginBottom: "5px",
	  padding: "20px",
      },
      bsCalloutDanger: {
       borderLeftColor: "#d9534f"
     }
    }

    var movie =  (this.state && this.state.movie) ? this.state.movie : this.props.selectedMovie;
    // var genres = (movie.genres)? (movie.genres.map( l => l.name ).toString() ) : ("");
    var genres = "";
    var imageBasePath = "http://image.tmdb.org/t/p/w185";

    return (
        <div>
          <Link to={"/"}>Back to Movies</Link>
          { (movie) ? (
              <div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                    <div className="panel panel-default">
                      <div className="panel-heading resume-heading">
                        <h1>{movie.title}</h1>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="col-xs-12 col-sm-4">
                                <img src={imageBasePath+"/"+movie.poster_path} alt=".."/>
                            </div>

                            <div className="col-xs-12 col-sm-8">
                              <ul className="list-group">
                                <li className="list-group-item"><b>Original Title: </b>{movie.original_title}</li>
                                <li className="list-group-item"><b>Genres: </b> { genres } </li>
                                <li className="list-group-item"><b>Realease Date: </b>{movie.release_date}</li>
                                <li className="list-group-item"><b>Status: </b>{movie.status}</li>
                                <li className="list-group-item"><b>Average: </b>{movie.vote_average}</li>
                                <li className="list-group-item"><b>Total votes: </b> {movie.vote_count}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={Object.assign({}, styles.bsCallout, styles.bsCalloutDanger)}>
                        <h4>Overview</h4>
                        <p>{movie.overview}</p>
                       </div>

                    </div>
                  </div>
                </div>

              </div>
            ) : ( <Loading/> )
          }
        </div>
    );
  }

  getMovieById(id){
    if (id){
      this.setState({ loading: true });
      var API_KEY = "0c33d41d79f487cb8d4a58ae46e663e0";
      var url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+API_KEY;
      Request.get(url)
        .then((response) => { return response.body; })
        .then((data) => {
          this.setState({ movie: data, loading: false }) })
        .catch((errorMessage) => {
          this.setState({ error: errorMessage });
        });
    }
  }
}
