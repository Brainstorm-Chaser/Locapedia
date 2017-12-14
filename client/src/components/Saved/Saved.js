import React, { Component } from "react";
import API from '../../utils/API';
import SavedEvent from '../SavedEvent'

class Saved extends Component{
  state = {
    savedVenues : []
  }

  componentDidMount(){
    console.log("loadVenues")
    API.getUserVenues("111466030326545450170")
    .then(res => {
      console.log("result", res)
      this.setState({savedVenues: res.data})
      })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Saved Venues
            </div>
            <div className="panel-body">
              {
                this.state.savedVenues ? 
                (this.state.savedVenues.map ((venue,index) => (
                  <SavedEvent 
                   
                   // key = {venue._id}
                    key = {index}
                    saved = {true}
                    id ={venue}
                  />
                ))) 
                : (<h3>No Saved Venues</h3>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;