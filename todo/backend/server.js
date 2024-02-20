const express = require('express');
const cors = require('cors');
require('./config/connect');

const todoRoute = require('./routes/todo');


const app = express();
app.use(express.json());
app.use(cors());


app.use('/todo', todoRoute);





app.listen(3000, ()=>{
    console.log('server work');
})


