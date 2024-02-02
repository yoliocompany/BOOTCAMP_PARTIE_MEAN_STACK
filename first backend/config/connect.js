// 1

const mongoose = require('mongoose');

// 2

mongoose.connect( 'mongodb://127.0.0.1:27017/bootcamp75' )
    .then(
        ()=>{
            console.log('connected to db :)');
        }
    )
    .catch(
        ()=>{
            console.log('error in db connection :(');
        }
    )

