const express = require('express')
const router = express.Router()
const InvestorCont = require('../controllers/investorsCont')
const BorrowerCont = require('../controllers/borrowerCont')


const mid = (req, res, next) => {

    if (req.session.userId) {
        //console.log(req.session)
        next()
    } else {
        res.redirect('/')
    }
}


//routingan investor
router.get('/investor', InvestorCont.home)
router.post('/investor/register', InvestorCont.register)
router.post('/investor/login', InvestorCont.login)
router.get('/investor/add', mid, InvestorCont.getTest)
router.get('/investor/logout', InvestorCont.logout)

//routingan borrowers(peminjam)
router.get('/borrower', BorrowerCont.home)
router.post('/borrower/register', BorrowerCont.register)
router.post('/borrower/login', BorrowerCont.login)
router.get('/borrower/add', mid, BorrowerCont.getTest)
router.get('/borrower/logout', BorrowerCont.logout)

module.exports = router