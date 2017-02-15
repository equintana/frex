import React, { Component, PropTypes } from 'react';
import ImageRender from './ImageRender';

class Slider extends Component {

  render(){
    return (
      <div>
        {
          this.props.images.map( item=>
            <ImageRender caption={item.caption} url={item.url}/>
          )
        }
      </div>
    );
  }
}

Slider.propTypes = {
  images: PropTypes.array
}

export default Slider;
