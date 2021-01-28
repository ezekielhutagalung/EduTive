const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')


const mid = (req,res,next) =>{
    
    if(req.session.userId){
        next()
    }else{
        res.send('gagalbelomlogin')
    }
}

router.get('/',mid, Controller.home)

router.post('/register', Controller.register)

router.post('/login', Controller.login )

router.get('/add', Controller.getTest)




module.exports = router