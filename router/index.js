const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')


const mid = (req,res,next) =>{
   
    if(req.session.userId){
        //console.log(req.session)
        next()
    }else{
        res.redirect('/')
    }
}

router.get('/', Controller.home)

router.post('/register', Controller.register)

router.post('/login', Controller.login )

router.get('/add',mid, Controller.getTest)

router.get('/logout', Controller.logout)




module.exports = router