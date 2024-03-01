const mongoose = require('mongoose');

const User = mongoose.model('User', {

    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }

})

module.exports = User;