const productController = require('../../controllers/products')
const express = require('express')

const router = new express.Router()

//get aLL products
router.get('/products', productController.getProducts)


//get a single product info 
router.get('/products/:id', productController.getProduct)


//update a product info 
router.patch('/products/:id', productController.updateProduct)



//delete a product  
router.delete('/products/:id', productController.deleteProduct)


module.exports = router;
