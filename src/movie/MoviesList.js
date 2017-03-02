import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MoviesList extends Component {

  render(){
    var styles = {
      poster: {
        width: "80%",
        height: "80%",
        display: "block"
      },
      overview: {
        width: "100%",
        height: "100px",
        whiteSpace: "initial",
        overflow:"hidden",
	textOverflow: "ellipsis"
      }
    }

   var imageBasePath = "http://image.tmdb.org/t/p/w92";
   var noImage = "http://3.bp.blogspot.com/-QLeq2EJqhkw/UdWLY7tXLBI/AAAAAAAALJc/zKNCt4p10Zk/s960/cinema+20.jpg";

    return (
      <div className="row">
      {
        this.props.movies.map( item=>
	  <div className="well well-lg col-sm-6 col-md-4" key={item.id}>
	    <div className="card" style={styles.poster}>
              { (item.poster_path) ? (
	        <img src={imageBasePath+"/"+item.poster_path} height="90" alt="Nothing to see here"/>
              ) : (
	        <img src={noImage} height="90" alt="Nothing to see here"/>
              )
              }
	      <div className="cart-text">
		<h4>
                  <Link to={"movies/"+item.id}>{item.title}</Link>
                </h4>
		<p style={styles.overview}>{item.overview}</p>
		<p><Link to={"movies/"+item.id}>View more ...</Link></p>
	      </div>
	    </div>
	  </div>
         )
      }
      </div>
    )
  }
}


MoviesList.propTypes = {
  movies: PropTypes.array,
}

export default MoviesList;
