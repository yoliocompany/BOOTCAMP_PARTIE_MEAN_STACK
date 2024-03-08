const mongooe = require('mongoose');


mongooe.connect('mongodb://127.0.0.1:27017/relationshipsdb')
    .then(
        ()=>{
            console.log('connected :)');
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )