const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const session = require ("express-session");
const cors = require("cors");
var passport = require('./config/passport-setup');
const MongoStore = require('connect-mongo')(session)
const cookieSession = require('cookie-session');
const cookieParser = require("cookie-parser");

// Serve up static assets
app.use(express.static("client/build"));

app.use(cors());

var authRoutes = require("./routes/auth-routes");

var keys = require("./config/keys");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use apiRoutes
app.use("/api", apiRoutes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/userVenues",
  {
    useMongoClient: true
  }
);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cookieParser())

app.use(cookieSession({ 
  name: 'session',
  keys: ['keyboard cat'],
  maxAge: 24*60*60*1000
  // secret: 'keyboard cat',
  // resave: true, 
  // saveUninitialized:true,
  // store: new MongoStore({mongooseConnection: mongoose.connection}),
  })); 
  // session secret
// passportSetup(passport);
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions

app.use('/success', (req, res, next) => {
  console.log('SUCCESS session :: ', req.session)
  req.session.save()
  // res.send('success')
  res.redirect('http://localhost:3000/')
})

//Return the session value when the client checks
app.get('/checksession', function(req, res){
  console.log(' Checking session for user/...')
  console.log('request session   inside checksession route :: \n', req.session)
  if (req.session.passport){
    res.json(req.session.passport.user)
  }else{
    res.json(false);
  }
});



app.use('/auth',authRoutes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


