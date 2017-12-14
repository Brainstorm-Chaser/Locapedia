var db = require('../models');

var router = require('express').Router();
var passport = require('passport');

// auth with google
router.get("/google", passport.authenticate('google',{
  scope: ['profile']
}));

// callback route for google to redirect to

router.get('/google/redirect', passport.authenticate('google',{
  //successRedirect : '/user/4/events',
  // successRedirect : 'http://localhost:3000/',
  // successRedirect : '/success',
  failureRedirect : '/google'
  }),
  (request, response) => {
    console.log('request-user :: ', request.user, '\n')
    request.session.user = request.user
    request.session.save()
    console.log('SESSION :: ', request.session, '\n')
    // response.send('Done.')

   response.redirect('http://localhost:3000/')
  }
);
// });
module.exports = router;