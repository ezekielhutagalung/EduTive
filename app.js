const express = require('express')
const session = require('express-session')
const router = require('./router/index')
const app = express()
const port = process.env.PORT || 5000

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true

}))

app.use('/', router)

app.listen(port, function () {
  console.log('this app running on port: ', port)
})