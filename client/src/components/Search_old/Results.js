import React from "react";
import "./Results.css";
import  { Image } from "react-bootstrap";


class Search extends Component {

  state = {
    location: "",
    category: "",
    results: [],
    trending: []
  }

   componentDidMount(){
    this.trendingLocation();
  }

  trendingLocation = () => {
    API.searchTrending("San Fransisco", "Restaurant" ).then(res => {
        console.log("result", res)
        this.setState({trending: res.data})
    }).catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({
      [name] : value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchVenues(this.state.location,this.state.category).then((res) => {
      this.setState({results: res.data.response.docs})
    })
  }

  render() {
    <div>   
      <div className="card">
          <Image src={this.state.results.photo.photourl}/>
          <a href={this.state.results.url} target='_blank'>
          <div className='overlay'>
            <h4><b>{this.state.results.name}</b></h4>
            <p>{this.state.results.location.formattedAddress}</p>   
            <p>{this.state.results.categories[0].name}</p> 
            <p>{this.state.results.stats.checkinsCount}</p>
            <p>{this.state.results.popular}</p>
            <p>{this.state.results.rating}</p>
            
          </div>
          </a>
      </div>
    </div>
  }   
}



export default Results;
