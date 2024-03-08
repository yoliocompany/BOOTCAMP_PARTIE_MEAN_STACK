const mongoose = require('mongoose');

const  Groupe = mongoose.model('Groupe', {

    title: {
        type: String
    }

})

module.exports = Groupe;