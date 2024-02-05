const mongoose = require('mongoose');

const Product = mongoose.model('Product', {

    title:{
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }

})

module.exports = Product;