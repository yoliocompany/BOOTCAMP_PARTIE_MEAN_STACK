const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {

    text: {
        type: String
    },
    priority: {
        type: Number
    }

})

module.exports = Todo;