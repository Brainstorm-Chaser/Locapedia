import React, { Component } from "react";
import API from '../../utils/API';
import "./Event.css";
import { Image } from "react-bootstrap";

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
       ...props
    }
  }
  
  state = {
  picUrl: ""
  }

  componentDidMount() {
    API.getVenuesPic(this.props.venueId).then((data) => {
      this.setState({picUrl:data})
    })
  }



  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({...nextProps}) 
  }

  handleSaveVenue = (event)=>{
    console.log(this.state.venueId)
    API.saveUserVenue(this.state.venueId)
    .then((res) => {
      console.log("got into then")
        console.log(res.data)
      })
  }

render (){
  return(
      <div className="card">
              {this.state.picUrl ? (<img src={this.state.picUrl}></img>):(<div></div>)}
          <a href={this.state.url} target="_blank">
            <div className="overlay">
              
              <p> {this.state.name} </p>
                <button className='btn btn-danger' onClick= {this.handleSaveVenue}>Save Venue</button>
                <a className='btn btn-info margin-top' href={this.props.url}>View Venue</a>
      </div>
          </a>
      </div>
    );
  }
}

export default Event;