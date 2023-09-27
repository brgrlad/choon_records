const express = require ('express')
router = express.Router()
const userController = require('../controllers/userController')

//USERS

//working
router.post('/createUser', userController.createUser)

//working
router.get('/findUser', userController.findOne)

//working
router.get('/findUsers', userController.findAll)

//working
router.delete('/deleteUser', userController.findOneAndDelete)

//working
router.post('/updateUser', userController.findOneAndUpdate)



module.exports = router;