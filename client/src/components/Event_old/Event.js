import React, { Component } from "react";
import API from '../../utils/API';

class Event extends Component {

constructor(props) {
  super(props);
  this.state = props

}
state = {
  picUrl: ""
}

componentDidMount(){
API.getVenuesPic(this.props.venueId).then((data)=>{


  this.setState({ picUrl: data })


})
}

componentWillUpdate(prevProps,prevState){
  console.log("+++++",this.state.picUrl)
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
      
      <div className="card-block">
        <h3 className="card-title">
        {this.props.name}  
        </h3>
        <a href={this.props.url} target='_blank'>
          <button className='btn btn-default' href={this.props.url}>View Venue</button>
        </a>
        {this.props.saved}
         
        <button className='btn btn-primary' onClick= {this.handleSaveVenue}>Save Venue</button> 
        
        
        
      </div>
    </div>
    );
  }
}

export default Event;