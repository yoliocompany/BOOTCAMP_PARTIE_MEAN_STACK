const mongoose = require('mongoose');

const Contact = mongoose.model('Contact', {

    name: {
        type: String
    },
    lastname: {
        type: String
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    tel: {
        type: String
    },
    email: {
        type: String
    },
    idUser: {
        type: String
    }
})

module.exports = Contact;