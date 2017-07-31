const bodyParser = require('body-parser')
const URL_AUTH = '/auth'
const PASSWORD = 'password'

module.exports = (app) => {
  app.use(URL_AUTH, bodyParser.urlencoded())
  app.get(URL_AUTH, function (req, res) {
    res.sendFile('auth.html', {root: __dirname})
  })
  app.post(URL_AUTH, function (req, res) {
    if (req.body.password === PASSWORD) {
      req.session.auth = true
      res.send('auth.ed!')
    } else {
      res.redirect(URL_AUTH)
    }
  })
}