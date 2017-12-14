import React, { Component } from "react";
import API from '../../utils/API';

class RecEvent extends Component {

    constructor(props) {
      super(props);
      this.state = props;
    }

    state = {    
        similarVenues:{}
    }

    componentDidMount(){

      console.log("haha", this.props.id)
      API.searchSimilarVenues(this.props.id)
        .then((res) => {
           console.log("in card2", res.data.response.similarVenues.items)
         this.setState({ similarVenues: res.data.response.similarVenues.items});
          console.log(this.state.similarVenues)
       }).catch(err => console.log(err));
    }

 
    render (){
      return(
        <div className="card">
          <div className="card-block">
            {this.state.similarVenues ?  (
              <div className="row">
              <div className="col-md-1">
              </div>
              {this.state.similarVenues.map((item,index)=>(
                <div className="col-md-2" key={index}>
                <div className="card">
                  <div className="card-block">
                 {item.name}
                  </div>
                  </div>
                 </div>
              )
             )}
              <div className="col-md-1">
              </div>
              </div>
              ):
              
            (<div></div>)             
            }

          </div>
        </div>
        );
      }
}


export default RecEvent;