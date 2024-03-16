const mongoose = require('mongoose');

const User = mongoose.model('User', {

    fullname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    tel: {
        type: String
    },
    image: {
        type: String
    },
    tags: {
        type: Array
    },
    date: {
        type: Date
    },
    role: {
        type: String
    }

})

module.exports = User;