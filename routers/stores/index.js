const storeController = require('../../controllers/stores')
const express = require('express')

const router = new express.Router()

//create a new store
router.post('/stores', storeController.createStore)

//show all stores
router.get('/stores', storeController.getStores)


//Edit a store name
router.patch('/stores/:id', storeController.updateStore)

//Create a new product for a single store
router.post('/stores/:id/product', storeController.createProduct)

//Show a single store by ID
router.get('/stores/:id', storeController.getStore)

//Delete a store //TODO create middleware to remove the products for the deleted store
router.delete('/stores/:id', storeController.deleteStore)




module.exports = router;
