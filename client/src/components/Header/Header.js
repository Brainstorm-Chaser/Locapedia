import React from "react";
import {Link } from 'react-router-dom';
import { ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';
import './header.css';


const Header = () => 
<div className="container"> 

     
  <nav className="navbar navbar-inverse navbar-top header">
    <div className="container-fluid">
   
                      
    


        <Link className="navbar-brand header" to='#'>LocaPedia</Link>
        <ul className="nav navbar-nav navbar-right">
          <li className= {window.location.pathname=== '/search' ? 'active' : ''}>
            <Link to='/search'>Search</Link>
          </li>

          <li className={window.location.pathname === '/saved' ? 'active' : ''}>
            <Link to='/saved'>Saved Venues</Link>
          </li>
          <li className={window.location.pathname === '/recommendation' ? 'active' : ''}>
            <Link to='/recommendation'>Recommended Venues</Link>
          </li>
            <li>
          <ButtonToolbar className="pull-right">
            <ButtonGroup>
              <Button href="http://localhost:3001/auth/google" id="google-btn btn-danger" src="/assets/img/google.png" alt="Google+ Login">Sign in</Button>
            </ButtonGroup>
        </ButtonToolbar>
        </li>
        </ul>
    </div>
  </nav>

<div class="video-background">
    <div class="video-foreground">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ppRxfuX5Jxw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=gpPMNpMFTqU" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>

</div>;

export default Header;