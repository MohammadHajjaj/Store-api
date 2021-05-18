const mongoose = require('mongoose')
const Store = require('../../src/models/store')
const Product = require('../../src/models/product')

const storeOneId = new mongoose.Types.ObjectId()
const storeOne = {
    _id: storeOneId,
    name: "Store 1",
}

const storeTwoId = new mongoose.Types.ObjectId()
const storeTwo = {
    _id: storeTwoId,
    name: "Store 2",
}
const productOne = {
    _id: new mongoose.Types.ObjectId(),
    name: 'First product',
    store: storeOne._id
}

const productTwo = {
    _id: new mongoose.Types.ObjectId(),
    name: 'second product',
    store: storeOne._id
}

const productThree = {
    _id: new mongoose.Types.ObjectId(),
    name: 'third product',
    store: storeTwo._id
}

const setUpDb = async () => {
    await Store.deleteMany()
    await Product.deleteMany()
    await new Store(storeOne).save()
    await new Store(storeTwo).save()
    await new Product(productOne).save()
    await new Product(productTwo).save()
    await new Product(productThree).save()
}

module.exports = {
    storeOneId,
    storeOne,
    storeTwoId,
    storeTwo,
    productOne,
    productTwo,
    productThree,
    setUpDb
}