const express = require('express');
require('./config/connect');
const heroRoute = require('./routes/hero');



const app = express();
app.use(express.json());



app.use('/hero', heroRoute);


app.use('/getimage' , express.static('./uploads'));

app.listen( 3000, ()=>{
    console.log('server work :) ');
} )