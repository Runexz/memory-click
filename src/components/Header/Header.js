// Header.js

import React from "react";
import "./Header.css"

const Header = props => (

    <div>
    <nav className="navbar bg-dark justify-content-center">
  <span className="navbar-text text-white h3">
    Current Game Score: {props.currentScore} | Top Score: {props.topScore}
  </span>
  </nav>
  <div class="jumbotron text-center">
  <div class="container">
    <h1 class="display-4">Memory Click Game</h1>
    <p class="lead">Click an image but dont click it again or you restart!</p>
  </div>
</div>
  </div>
);

export default Header;