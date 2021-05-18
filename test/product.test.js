const request = require("supertest")
const app = require('../app')
const mongoose = require('mongoose')
const Product = require("../src/models/product")
const Store = require("../src/models/store")

const {
    storeOneId,
    storeOne,
    storeTwoId,
    storeTwo,
    productOne,
    productTwo,
    productThree,
    setUpDb
} = require('./fixtures/db')

beforeEach(setUpDb)

test('Should create product for a store', async () => {
    const response = await request(app)
        .post(`/stores/${storeOne._id}/product`)
        .send({
            name: 'From my test',
            price: 32
        })
        .expect(201)
})

test('Should fetch all products', async () => {
    const response = await request(app)
        .get('/products')
        .send()
        .expect(200)
    expect(response.body.length).toEqual(3)
})

test('Should fetch a product', async () => {
    const response = await request(app)
        .get(`/products/${productOne._id}`)
        .send()
        .expect(200)
})

test('Should update a product', async () => {
    const response = await request(app)
        .patch(`/products/${productOne._id}`)
        .send({
            name: 'fasdgs',
            price: 23
        })
        .expect(200)
})

test('Should delete a product', async () => {
    const response = await request(app)
        .delete(`/products/${productOne._id}`)
        .send()
        .expect(200)
    const product = await Product.findById(productOne._id)
    expect(product).toBeNull()
})
