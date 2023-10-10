const express = require ('express')
router = express.Router()

const productController = require('../controllers/productController')







//works fine
router.get('/getOneProduct/:_id', productController.findOne)

//works fine
router.get('/getAllProducts', productController.findAll)


// works fine
router.post('/updateProduct', productController.findOneAndUpdate)


//works fine
router.delete('/deleteProduct', productController.findOneAndDelete)

// works fine
router.post('/createProduct', productController.createProduct)

//PRODUCTS
router.get('/:productDetails', (req, res) => {
    res.send('product detail page')
})

module.exports = router;