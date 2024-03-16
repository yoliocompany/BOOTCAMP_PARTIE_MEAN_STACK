const express = require('express');
const cors = require('cors');
require('./config/connect');

const boardRoute = require('./routes/board');
const clientRoute = require('./routes/client');
const userRoute = require('./routes/user');
const projectRoute = require('./routes/project');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/board', boardRoute);
app.use('/client', clientRoute);
app.use('/user', userRoute);
app.use('/project', projectRoute);

app.listen(3000, ()=>{
    console.log('server work');
    
})