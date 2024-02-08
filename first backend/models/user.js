const mongoose = require('mongoose');


const User = mongoose.model('User', {
    fullname: {
        type: String,
        default: 'guest'
    },
    email: {
        type: String,
        unique: true,
        required: true

    },
    password: {
        type: String,
        required: true
    }
})

module.exports = User;
