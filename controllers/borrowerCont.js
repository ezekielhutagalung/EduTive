const { Borrower, Investor } = require('../models')

class BorrowersCont {
    static home(req, res) {
        let errors
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }

        res.render('formProposal', { errors })
    }

    static register(req, res) {
        const newData = {
            full_name: req.body.full_name,
            phone_number: req.body.phone_number,
            email: req.body.email,
            selected_education: req.body.selected_education,
            loan_time: req.body.loan_time,
            money_needed: req.body.money_needed,
            speech_box: req.body.speech_box,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        Borrower.create(newData)
            .then(() => {
                res.redirect('/borrower/list')
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static dataBorrrower(req, res) {
        Borrower.findAll()
            .then((data) => {
                res.render('loginborrower', { data })
            })
            .catch((error) => {
                res.send(err.message)
            })
    }

    static delete(req, res) {
        Borrower.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then(() => {
                res.redirect('/borrower/list')
            })
            .catch((error) => {
                res.send(error)
            })
    }

    static invest(req, res) {
        Borrower.findByPk(+req.params.id, {
            include: Investor
        })
            .then((data) => {
                res.render('listyangdiinvest', { data })
            })
            .catch((error) => {
                res.send(error.message)
            })
    }

}


module.exports = BorrowersCont
