var GoogleStrategy = require('passport-google-oauth20');
var keys = require("./keys");
var db = require("../models/index.js");
var User = require("../models/user.js");
var passport = require('passport');
// var newUser;



passport.use(
  new GoogleStrategy(
    {
       //options for the google strategy
       callbackURL : '/auth/google/redirect',
       clientID: keys.google.clientID,
       clientSecret: keys.google.clientSecret 
     },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId: profile.id})
        .then((currentUser)=>{
          if (currentUser){
            done(null, currentUser)
          } else{
            new User({
              username: profile.displayName,
              googleId : profile.id,
            })
            .save()
            .then((newUser)=>{
              console.log("new User created" + newUser);
              return done(null, newUser)
            })
          }
        })
    }
  )
)  

passport.serializeUser(function(user, done) {
  done(null, user.id)
})
passport.deserializeUser(function(id, done) {
      User.findById(id).then(function(user){
      done(null, user)

    })

}) 


module.exports = passport