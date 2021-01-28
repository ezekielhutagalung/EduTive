const{Investor, Borrower} = require('../models')
const {compare} = require('../helper/bcrypt')


class Controllers{

    static home(req,res){
        let errors

        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }

        res.render('Home', { errors })
    }

    static register(req,res){
        const newData = {
            full_name: req.body.full_name,
            phone_number: req.body.phone_number,
            email:req.body.email,
            password:req.body.password,
            createdAt : new Date(),
            updatedAt : new Date()

        }

        Investor.create(newData)
         .then( data =>{
             res.redirect('/')
         })
         .catch(err=>{
             res.send(err.message)
         })
    }

    static login(req,res){
        Investor.findOne({
            where:{
                full_name: req.body.full_name
            }
        })
        .then(user=>{
            let hasilPassword = compare(req.body.password, user.password)
            console.log(hasilPassword)
            if(user && hasilPassword){
                req.session.userId = user.id
                res.render('berhasillogintest')
            }else{
                res.send('invalid user name or pass')
            }
        })
        .catch(err=>{
            res.send(err.message)
        })
    }

 static getTest(req,res){
     res.render('add.js')
 }
}


module.exports= Controllers
