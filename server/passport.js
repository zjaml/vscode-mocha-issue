var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

passport.serializeUser(function(user, done){
  console.log('serializeUser');
  done(null, 'Jin')
})

passport.deserializeUser(function(id, done){
  console.log('deserializeUser');
  done(null, {name:'Jin'})
})

passport.use('local-login', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
}, function(req, email, password, done) {
  return done(null, {name: 'Jin'})
}))

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  return done(null, {name: 'Jin'})
}))

export default passport
