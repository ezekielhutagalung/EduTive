const express = require('express')
const router = require('./routes/index')

const app = express()
const port = process.env.PORT || 4000

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(port, function () {
    console.log('this app running on port: ', port)
})