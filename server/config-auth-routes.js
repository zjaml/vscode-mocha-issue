export default function(app, passport){
  app.post('/login', passport.authenticate('local-login'), (req, res) => {
    console.log("login called");
    res.json(req.user)
  })

  app.post('/signup', passport.authenticate('local-signup'), (req, res) => {
    console.log('signed up')
    res.json(req.user)
  })
}
