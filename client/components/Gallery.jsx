import React, { Component } from "react";
import Hash from "string-hash";
// import ViolaFirst from '../../server/public/images/Viola1.jpg';

class Gallery extends Component {
  state = {
    index: 0,
    picList: ["/images/Viola1.jpg", "/images/Viola2.jpg", "/images/Viola3.jpg"],
  };

  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <>
      <img className='goldBorder' src="./images/goldborders.png" />
        <div class="gallery">
          <div className="grid-item galleryBox">
            <img src="./images/viola2.jpg" />
          </div>
          <div className="grid-item galleryBox">
            <img src="./images/viola3.jpg" />
          </div>
          <div className="grid-item galleryBox">
            <img src="./images/Viola1.jpg" />
          </div>
          <div className="grid-item galleryBox">
            <img src=".images/Wappas2019/IMG_3318.JPG" />
          </div>
        </div>
        <button className='homeButton'>^</button>
      </>
    );
  }
}

export default Gallery;
