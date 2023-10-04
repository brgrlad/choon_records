const express = require ('express')
router = express.Router()

const adminController = require('../controllers/adminController')

//CREATE ADMIN
router.post('/createAdmin', adminController.createOne)

//LOGIN ADMIN - GET
router.get('/login', adminController.loginAdmin)

//LOGIN ADMIN - POST
router.post('/login', adminController.loginAdmin)

//VERIFY TOKEN
router.post('/verify_token', adminController.verify_token)

//GET ALL ADMINS
router.get('/getAllAdmin', adminController.findAll)

//DELETE ADMIN
router.delete('/deleteAdmin', adminController.findOneAndDelete)

//UPDATE ADMIN
router.post('/updateAdmin', adminController.findOneAndUpdate)

module.exports = router;