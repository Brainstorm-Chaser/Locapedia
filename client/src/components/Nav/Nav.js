import React from "react";
import "./Nav.css";

// Navigation bar
// Bar
const Nav = () => (
  <nav className="navbar navbar-default navbar-top">
    <div className="container-fluid">
        <a href="/" className="navbar-brand navbar-left">
          <ul class="nav nav-tabs"> 
            <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>Home</a></li>
            <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-knight" aria-hidden="true"></span>Profile</a></li>
            <li role="presentation" class="active"><a href="#"><span class="glyphicon glyphicon-copy" aria-hidden="true"></span>Saved Article</a></li>
          </ul>
        </a>
          <div className="nav navbar-nav navbar-right">
           <button type="button" class="btn btn-default nav-button">Login</button>
           <button type="button" class="btn btn-default nav-button">Sign In</button>
          </div>
    </div>
  </nav>
);

export default Nav;
