import React, { Component } from "react";
import API from '../../utils/API';

class SavedEvent extends Component {

    constructor(props) {
      super(props);
      this.state = props;
    }

    state = {    
        venues:{}
    }

    componentDidMount(){

      console.log("haha", this.props.id)
      API.getVenuesId(this.props.id)
        .then((res) => {
           console.log("in card2", res.data.response.venue.bestPhoto)
         this.setState({ venues: res.data.response.venue});
          console.log(this.state.venues)
       }).catch(err => console.log(err));
    }

 
    render (){
      return(
        <div className="card">
          <div className="card-block">
            {this.state.venues ?  (
              <div>
              <p>{this.state.venues.name}</p>
              <p>{this.state.venues.hereNow.count}</p>
              
              </div>
              ):
              
            (<p> message </p>)             
            }

          </div>
        </div>
        );
      }
}


export default SavedEvent;