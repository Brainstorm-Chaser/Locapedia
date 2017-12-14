import React from "react";
import "./Jumbotron.css";
import { DropdownButton,MenuItem, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';

const Jumbotron = () => (

  <div className="jumbotron text-center background-image">
    <div className='row'>
        <ButtonToolbar className="pull-right">
            <ButtonGroup>
              <Button href="/auth/google" id="google-btn" src="/assets/img/google.png" alt="Google+ Login">Google +</Button>
            </ButtonGroup>
        </ButtonToolbar>
              
    </div>

    <div className='row'>
    <h1><span className="glyphicon glyphicon-education" aria-hidden="true"></span>Tour Guide</h1>
    </div>
      
    <div className='row'>

    <div className='col-sm-4'></div>
      <div className='col-sm-4'>
        <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/><br/>
        <label>Category:</label>
      <DropdownButton>
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>

        <br/>

        <button type="button" className="btn btn-default">Search</button>
      </div>
     <div className='col-sm-4'>
     </div>

    </div>

  </div>
);

export default Jumbotron;
