const express = require ('express')
router = express.Router()
const adminController = require('../controllers/adminController')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')

//HOME
router.get('/', (req, res) => {
    res.send('hello from home')
});


//ADMIN
router.get('/getOneAdmin', adminController.findOne)
router.get('/getAllAdmin', adminController.findAll)
router.delete('/deleteOneAdmin', adminController.findOne)
router.post('/updateAdmin', adminController.findOneAndUpdate)

//USERS
router.get('/findUser', userController.findOne)
router.get('/findUsers', userController.findAll)
router.delete('/deleteUser', userController.findOneAndDelete)
router.post('/updateUser', userController.findOneAndUpdate)


//PRODUCTS
router.get('/getOneProduct', productController.findOne)
router.get('/getAllProducts', productController.findAll)
router.post('/updateProduct', productController.findOneAndUpdate)
router.delete('/deleteProduct', productController.findOneAndDelete)
router.post('/createProduct', productController.createProduct)

module.exports = router;