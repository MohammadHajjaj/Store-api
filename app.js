const express = require('express')
const mongoose = require('mongoose')
const app = express()
const storeRouter = require('./routers/stores/index.js')
const productsRouter = require('./routers/products/index.js')

mongoose.connect('mongodb://localhost:27017/Stores-app', {
    userNewUrlPrase: true,
    useCreateIndex: true
})

app.use(express.json())

app.use(storeRouter)
app.use(productsRouter)
module.exports = app