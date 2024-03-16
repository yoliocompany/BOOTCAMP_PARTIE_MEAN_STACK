const mongoose = require('mongoose');

const Project = mongoose.model('Project', {

    name: {
        type: String
    },
    description: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    files: {
        type: Array,
        default: []
    },
    date: {
        type: Date
    },
    budget:{
        type: Number
    },
    client: {
        type: mongoose.Types.ObjectId,
        ref: 'Client'
    },
    status: {
        type: String
    },
    team: {
        type: [ { type: mongoose.Types.ObjectId , ref: 'User' } ]
    }

})

module.exports = Project;