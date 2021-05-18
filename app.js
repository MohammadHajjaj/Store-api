const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./src/models/product');
const Store = require('./src/models/store');
const storeRouter = require('./src/routers/stores/index.js')
const productsRouter = require('./src/routers/products/index.js')

require('./src/db/mongoose')


app.use(express.json())

app.use(storeRouter)
app.use(productsRouter)
module.exports = app