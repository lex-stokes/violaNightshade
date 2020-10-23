import React from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { HashRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='colorme'>
    <Router>
      <Nav />
      <Routes/>
    </Router>
    </div>
  );
};

export default App;

