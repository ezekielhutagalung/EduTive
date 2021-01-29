const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const InvestorCont = require('../controllers/investorsCont')
const BorrowerCont = require('../controllers/borrowerCont')

const mid = (req, res, next) => {

    if (req.session.userId) {
        next()
    } else {
        res.redirect('/')
    }
}

router.get('/', Controller.home)

//routingan investor
router.get('/investor', InvestorCont.home)
router.post('/investor/register', InvestorCont.register)
router.post('/investor/login', InvestorCont.login)
router.get('/investor/logout', InvestorCont.logout)
router.get('/investor/showlist', mid, InvestorCont.showProfile)
router.get('/investor/edit/:id', InvestorCont.showEditGet)
router.post('/investor/edit/:id', InvestorCont.EditPost)
router.get('/investor/:id/invest', InvestorCont.invest)

//routingan borrowers(peminjam)
router.get('/borrower', BorrowerCont.home)
router.post('/borrower', BorrowerCont.register)
router.get('/borrower/list', mid, BorrowerCont.dataBorrrower)
router.get('/borrower/:id/delete', BorrowerCont.delete)


module.exports = router