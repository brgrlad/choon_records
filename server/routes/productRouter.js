const express = require ('express')
router = express.Router()

const productController = require('../controllers/productController')



//HOME
router.get('/', (req, res) => {
    res.send('hello from home!')
});

//PRODUCTS

//works fine
router.get('/getOneProduct', productController.findOne)

//works fine
router.get('/getAllProducts', productController.findAll)


// works fine
router.post('/updateProduct', productController.findOneAndUpdate)


//works fine
router.delete('/deleteProduct', productController.findOneAndDelete)

// works fine
router.post('/createProduct', productController.createProduct)

module.exports = router;