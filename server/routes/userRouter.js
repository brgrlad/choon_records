const express = require ('express')
router = express.Router()
const userController = require('../controllers/userController')

//USERS

//CREATE NEW USER
router.post('/register', userController.createUser)

//working
router.get('/findUser', userController.findOne)

//working
router.get('/findUsers', userController.findAll)

//working
router.delete('/deleteUser', userController.findOneAndDelete)

//working
router.post('/updateUser', userController.findOneAndUpdate)

//LOGIN USER - GET
router.get('/login', userController.loginUser)

//LOGIN USER - POST
router.post('/login', userController.loginUser)

//VERIFY TOKEN
router.post('/verify_token', userController.verify_token)



module.exports = router;