const request = require("supertest")
const app = require('../app')
const Store = require('../models/Store')
const mongoose = require('mongoose')
const { storeOneId, storeOne, setUpDb } = require("./fixtures/db")

beforeEach(setUpDb)

test('Should signup a new store', async () => {
    const response = await request(app).post('/stores').send({
        name: "First store",
    }).expect(201)
    //make sure that the database was changed
    const store = await Store.findById(response.body._id)
    expect(store).not.toBeNull() // same as if !store
    //assertions about the response

})

test('Should get all store information', async () => {
    await request(app)
        .get(`/stores`)
        .send()
        .expect(200)
})

test('Should get a store information', async () => {
    await request(app)
        .get(`/stores/${storeOne._id}`)
        .send()
        .expect(200)
})

test('Should delete a store', async () => {
    const response = await request(app)
        .delete(`/stores/${storeOne._id}`)
        .send()
        .expect(200)
    const store = await Store.findById(storeOne._id)
    expect(store).toBeNull()

})



test('Should update store fields', async () => {
    const response = await request(app)
        .patch(`/stores/${storeOne._id}`)
        .send({
            name: 'xaedds'
        })
        .expect(200)
    const store = await Store.findById(storeOne._id)
    expect(store.name).toEqual('xaedds')

})
