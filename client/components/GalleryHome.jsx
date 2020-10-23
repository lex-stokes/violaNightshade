import React, { Component } from "react";
import { Link } from "react-router-dom";

class GalleryHome extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="galleryDiv">
          <div className="folderGallery">
            <Link to="/Gallery">
              <img className="viola" src="./images/viola-preview.png" />
              <br></br>
              Burlesque Rumble 2020
            </Link>
          </div>
          <div className="folderGallery">
            <Link to="/Gallery">
              <img className="viola" src="./images/nightshade-preview.png" />
              <br></br>
              NZBF 2019
            </Link>
          </div>
          <div className="folderGallery">
            <Link to="/Gallery">
              <img className="viola" src="./images/viola-preview.png" />
              <br></br>
              Wappas 2019
            </Link>
          </div>
          <div className="folderGallery">
            <Link to="/GalleryHome">
              <img className="viola" src="./images/floral.png" />
              <br></br>
              More coming soon
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default GalleryHome;
