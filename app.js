const express = require('express')
const mongoose = require('mongoose')
const app = express()
const storeRouter = require('./routers/stores')
const productsRouter = require('./routers/products')
mongoose.connect('mongodb://localhost:27017/Stores-app', {
    userNewUrlPrase: true,
    useCreateIndex: true
})

app.use(express.json())

app.use(storeRouter)
app.use(productsRouter)

app.listen(3000, () => {
    console.log('Listenting to port 3000')
})