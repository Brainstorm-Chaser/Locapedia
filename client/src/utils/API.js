import axios from "axios";

var CLIENTIDKEY='IJZTCGP1CODLRRORCAUOBFJC0IL2UXOWCAEYIQJENFJSHGX1';
var CLIENTSECRETKEY='HPTK5IE3INWMX3UCOIGLSOHXLPXDTVZNUNZQNNNE15R4HJFY';

// Mahtab Api Key
// var CLIENTIDKEY ='RYH0B5SI4MPYO5CGE01PVILQICU3SC0WN5VIZ0REYHTGVBGH';
// var CLIENTSECRETKEY='JN3IDX441GKEQZO4IHSU4YP4QEOEQKYE4VD2UP03V0PPJKR3';


var V ='20171116';


// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // getRecipes: function(query) {
  //   return axios.get("/api/recipes", { params: { q: query}});
  // },

  getVenuesId: function(param1,param2){
    console.log("p1"+param1)
    //api/venuesId=
  	return axios.get("https://api.foursquare.com/v2/venues/"+param1 , {params:{client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V }})
    .then(function(data){
      return data
    });
  },

  getVenuesPic: function(param1){

   //api/venuesId=
    return axios.get("https://api.foursquare.com/v2/venues/" + param1 + "/photos", {params:{client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V, limit: '1' }})
    .then(function(data){
      //console.log("I am the pic", data.data.response.photos.items[0])
      let picUrl = data.data.response.photos.items[0]
      let prefix = picUrl.prefix + "200x250"
      let suffix = picUrl.suffix
      // let size = "200x250"
      let photoUrl = prefix + suffix

     // return axios.get(prefix + "200x200" + suffix)
     //    .then(function(photo) {
     //      console.log(photo)
     //    })

     return photoUrl
    });
  },

  searchVenues: function(param1,param2){
  	return axios.post("/api/venues", {  "near": param1, "categoryId": param2, client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V, "limit": 8})
    .then(function(data){
      return data
    });
  },

  searchTrending: function(param1){
      return  axios.get("https://api.foursquare.com/v2/venues/trending",{params:{near: param1,radius:2000, limit:10 ,client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V }})
    .then((results) => {
      return results
    });
  },
  // searchTrending: function(param1,param2){
  // 	return axios.get("https://api.foursquare.com/v2/venues/trending" + param1 , {params:{client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V }})
  //   .then(function(data){
  //     return data
  //   });
  // },
  
  // pass the current venues_id
  searchSimilarVenues: function(param1,param2){
  	return axios.get("https://api.foursquare.com/v2/venues/"+param1+"/similar/", { params:{client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V}});
  },
  //can I pass the array of venues Ids
  getUserVenues: function(id) {
    console.log("IN")
    return axios.post("/api/uservenues/", {googleId:id})
    .then(function(data){
      console.log("APIJS"+data)
      return data
  });
  },

  deleteUserVenue: function(id) {
    return axios.delete("/api/users/:user_id/venues/" + id);
  },
  // Saves a venue id to the database no need for bookData
  saveUserVenue: function(venueId) {

    return axios.post("/api/savevenues/" , {saveitems: venueId})
    .then(function(data){
      console.log(data)
      return data
    });
  }

};
