const mongoose = require('mongoose');
const Product = require('./product');

const storeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],

})


//delete products associated with the deleted store
storeSchema.pre('remove', async function (next) {
    await Product.deleteMany({ store: this._id })
    // console.log("pre test");
    next()
})
const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
