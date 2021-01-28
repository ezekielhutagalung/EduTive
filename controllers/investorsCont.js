const { Investor, Borrower } = require('../models')
const { compare } = require('../helpers/bcrypt')


class InvestorsCont {
    static home(req, res) {
        let errors

        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }

        res.render('home.ejs', { errors })
    }

    static register(req, res) {
        const newData = {
            full_name: req.body.full_name,
            phone_number: req.body.phone_number,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        Investor.create(newData)
            .then(() => {
                res.render('login')
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static login(req, res) {
        Investor.findOne({
            where: {
                full_name: req.body.full_name
            }
        })
            .then(user => {
                let hasilPassword = compare(req.body.password, user.password)
                //console.log(hasilPassword)
                if (user && hasilPassword) {
                    req.session.userId = user.id
                    //console.log(req.session, "<< ini req session")
                    res.render('berhasillogintest')
                } else {
                    res.send('invalid user name or pass')
                }
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static getTest(req, res) {
        res.render('add.ejs')
    }

    static logout(req, res) {
        console.log(req.session)
        req.session.destroy(function (err) {
            res.redirect('/')
        })
    }


    static showProfile(req, res) {
        Investor.findAll()

            .then(data => {
                res.render('showinvestors', { data })
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static showEditGet(req, res) {
        const getId = +req.params.id
        console.log(getId, "<<ini id")

        Investor.findByPk(getId)
            .then(data => {
                console.log(data, '<< show form')
                res.render('editprofile', { data })
            })
            .catch(err => {
                res.send(err.message)
            })

    }

    static EditPost(req, res) {
        let id = +req.params.id
        let newBook = {
            full_name: req.body.full_name,
            phone_number: req.body.phone_number,
            email: req.body.email
        }

        Investor.update(newBook, { where: { id } })
            .then(data => {
                res.redirect('/investor/showlist')
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static invest(req, res) {
        Borrower.findAll({
            include: Investor,
            where: {
                id: +req.params.id
            }
        })
            .then((data) => {
                res.render('listyangdiinvest', { data })
            })
            .catch(err => {
                res.send(err.message)
            })
    }



}


module.exports = InvestorsCont
