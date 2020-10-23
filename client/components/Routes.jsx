import Contact from "./Contact";
import Events from "./Events";
import Gallery from "./Gallery";
import GalleryHome from "./GalleryHome";
import Home from "./Home";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/GalleryHome" component={GalleryHome} />
        <Route exact path="/Home" component={Home} />
      </Router>
    </>
  );
};

export default Routes;
