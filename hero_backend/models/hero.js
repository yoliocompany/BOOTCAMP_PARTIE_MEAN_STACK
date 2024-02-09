const mongoose = require('mongoose');

const Hero = mongoose.model('Hero', {
    name: {
        type: String
    },
    power: {
        type: Number
    },
    image: {
        type: String
    }
})

module.exports = Hero;