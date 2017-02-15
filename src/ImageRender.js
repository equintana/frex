import React, { Component, PropTypes } from 'react';
import Displayer from './Displayer';

class ImageRender extends Component {
  constructor(props){
    super(props);
    this.state = {
      caption: props.caption,
      url:     props.url,
    }

    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(evt){
     evt.preventDefault();
     // console.log('Capture.', this.state.captures);
  }

  render() {
    return (
        <div>
          <Displayer caption={this.state.caption} url={this.state.url}></Displayer>
        </div>
      )
  }
}


ImageRender.propTypes = {
  caption: PropTypes.string.isRequired,
  url:     PropTypes.string
}


export default ImageRender;


