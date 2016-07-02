import express from 'express'
import passport from './passport'
import configAuthRoutes from './config-auth-routes'
import {sessionConfig} from './config'

var app = express()
var path = require('path')
var port = process.env.PORT || 8000
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session = require('express-session')

function errorHandler(err, req, res, next){
  console.error(err.stack)
  res.status(500)
  res.json({error: err})
}

if (process.env.NODE_ENV !== "production"){
  var morgan = require('morgan')
  app.use(morgan('dev'))
}else{
  app.use('/static', express.static(path.resolve('./static')))
}

// required for passport
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionConfig)) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions

configAuthRoutes(app, passport)

//error handler middleware need to be last on the middleware stack.
app.use(errorHandler)

app.get("/*", function(req, res) {
  res.sendFile(path.resolve('./index.html'))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

export default app