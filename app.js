const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const session = require('express-session')



app.set('view engine', 'ejs') 


app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
  
}))
const router = require('./router/index')

app.use('/',router)

app.listen(port, function () {
    console.log('this app running on port: ', port)
})