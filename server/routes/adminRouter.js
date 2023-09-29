const express = require ('express')
router = express.Router()

const adminController = require('../controllers/adminController')

//ADMIN

//working
router.post('/createAdmin', adminController.createOne)

//working
router.get('/getOneAdmin', adminController.findOne)

//working
router.get('/getAllAdmin', adminController.findAll)

//working
router.delete('/deleteAdmin', adminController.findOneAndDelete)

//working
router.post('/updateAdmin', adminController.findOneAndUpdate)


module.exports = router;