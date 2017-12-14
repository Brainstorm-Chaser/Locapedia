import React, { Component } from "react";
import API from '../../utils/API';
import Results from '../Results'


class Search extends Component {
  state = {
    location: "",
    category: "4d4b7104d754a06370d81259",
    venues: []
  }

  componentDidMount() {
    //this.trending();
    API.searchTrending('San Fransisco')
    .then((res) => {
      console.log("response",res.data.response.venues)
      this.setState({ venues: res.data.response.venues})
    });
  }
  componentDidUpdate() {
    console.log("Update",this.state)
  }

  // trending = () => {

  //   API.searchTrending('San Fransisco')
  //   .then((res) => {
  //     console.log("response",res.data.response.venues)
  //     this.setState({ venues: res.data.response.venues})
  //   });
  //}


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchVenues(this.state.location, this.state.category)
    .then((res) => {
      console.log(res.data)
      this.setState({ venues: res.data})
    })
  }

      render() {
        return (
          <div>
          <div className="container">
            <form> 
            <div className="row">
              <div class="col-md-6">  
                
                  <input className="form-control"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    name="location"
                    placeholder="Location"/>
              </div>
                
                <div className="col-md-6">
                  <label>
                  Please select a category:
                    <select value={this.state.value} onChange={this.handleInputChange} name="category">
                      <option value="4d4b7104d754a06370d81259">Arts & Entertainment</option>
                      <option value="4deefb944765f83613cdba6e">Historic Site</option>
                      <option value="4bf58dd8d48988d17f941735">Movie Theater</option>
                      <option value="4bf58dd8d48988d181941735">Museum</option>
                      <option value="4bf58dd8d48988d1e5931735">Music Venue</option>
                      <option value="4bf58dd8d48988d1f2931735">Performing Arts Venue</option>
                      <option value="507c8c4091d498d9fc8c67a9">Public Art</option>
                      <option value="4bf58dd8d48988d184941735">Stadium</option>
                      <option value="4bf58dd8d48988d182941735">Theme Park</option>
                      <option value="56aa371be4b08b9a8d573520">Tour Provider</option>
                      <option value="4bf58dd8d48988d17b941735">Zoo</option>
                      <option value="4d4b7105d754a06372d81259">College & University</option>
                      <option value="4d4b7105d754a06373d81259">Event</option>
                      <option value="4d4b7105d754a06376d81259">Nightlife Spot</option>
                      <option value="4d4b7105d754a06377d81259">Outdoors & Recreation</option>                     
                    </select>
                  </label>
                

                  <input className="btn btn-primary"
                    onClick={this.handleFormSubmit}
                    type="submit" />
                  </div>
              </div>          
            
              
                </form>
              
            
          </div>

          {this.state.venues ? ( 
            <div>
              <Results 
              venues = {this.state.venues} />
            </div>
            ):(
            <h3>No Results to Display</h3>
          )}

          </div>
        );
      }
    }

export default Search;