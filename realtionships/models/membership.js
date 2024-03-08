const mongoose = require('mongoose');

const  Membership = mongoose.model('Membership', {

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    groupe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Groupe'
    }

})

module.exports = Membership;