const express = require('express');
const { Mongoose } = require('mongoose');
const Store = require('../models/store');
const Product = require('../models/product');
const router = new express.Router()

//create a new store
router.post('/stores', async (req, res) => {
    const newStore = new Store(req.body)
    try {
        await newStore.save()
        res.status(201).send(newStore)
    } catch (e) {
        res.status(400).send(e)
    }
})

//show all stores
router.get('/stores', async (req, res) => {
    const Stores = await Store.find({})
    res.send(Stores)
})


//Edit a store name
router.patch('/stores/:id', async (req, res) => {
    const id = req.params.id
    try {
        const updatedStore = await Store.findByIdAndUpdate(id, { name: req.body.name }, { runValidators: true, new: true })
        res.status(200).send(updatedStore)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Create a new product for a single store
router.post('/stores/:id/product', async (req, res) => {
    const id = req.params.id
    try {
        const foundStore = await Store.findById(id)//.populate('products', 'name')
        const newProduct = new Product(req.body)
        // console.log(req.body)
        // console.log(foundStore)
        // console.log(newProduct)
        foundStore.products.push(newProduct) // storing the new product in the store
        newProduct.store = foundStore// storing the store object in the product
        await foundStore.save()
        await newProduct.save()
        // res.status(201).send(foundStore)
        res.status(201).send(newProduct)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Show a single store by ID
router.get('/stores/:id', async (req, res) => {
    const id = req.params.id
    try {
        const foundStore = await Store.findById(id).populate('products') // also show the products of the store
        res.status(200).send(foundStore)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Delete a store //TODO create middleware to remove the products for the deleted store
router.delete('/stores/:id', async (req, res) => {
    const id = req.params.id
    try {
        //const deletedStore = await Store.findByIdAndDelete(id);

        const deletedStore = await Store.findById(id);

        // const test = await Product.find({ store: deletedStore._id })
        await deletedStore.remove()
        // console.log(deletedStore)
        // console.log(test)

        res.status(200).send(deletedStore)

    } catch (e) {
        res.status(500).send(e)
    }
})




module.exports = router;
