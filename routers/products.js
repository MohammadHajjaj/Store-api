const express = require('express')
const Product = require('../models/product');
const Store = require('../models/store');

const router = new express.Router()

//get aLL products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({}).populate('store', 'name')
        res.status(200).send(products)
    } catch (e) {
        res.status(400).send(products)
    }
})


//get a single product info 
router.get('/products/:id', async (req, res) => {
    const id = req.params.id
    try {
        const foundProduct = await Product.findById(id).populate('store', 'name')
        res.status(200).send(foundProduct)
    } catch (e) {
        res.status(400).send(e)
    }
})


//update a product info 
router.patch('/products/:id', async (req, res) => {
    const id = req.params.id
    try {
        const changedProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })//.populate('store', 'name')
        res.status(200).send(changedProduct)
    } catch (e) {
        res.status(400).send(e)
    }
})



//delete a product  
router.delete('/products/:id', async (req, res) => {
    const id = req.params.id
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        res.status(200).send(deletedProduct)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router;
