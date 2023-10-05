const express = require ('express')
router = express.Router()

const productController = require('../controllers/productController')



//HOME
// router.get('/', (req, res) => {
//     res.send('hello from home!')
// });





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

//PRODUCTS
router.get('/:productDetails', (req, res) => {
    res.send('product detail page')
})

module.exports = router;