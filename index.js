const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'MeqzLisyWawi3)',
  resave: false,
  saveUninitialized: false
}))

require('./auth')(app)

// drop connection if not authorized
app.use((req, res, next) => {
  if (req.session.auth)
    next()
  else 
    res.destroy();
})

app.get('/', (req, res) => {
  res.send(JSON.stringify(req.session))
})

app.listen(3000, function () {
  console.log('http://localhost:3000/')
})