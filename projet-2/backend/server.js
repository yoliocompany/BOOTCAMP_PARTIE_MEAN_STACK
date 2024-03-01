const express = require('express');
const cors = require('cors');

require('./config/connect');

const contactRoute = require('./routes/contact.route');
const userRoute = require('./routes/user.route');


const app = express();
app.use(express.json());
app.use(cors());


app.use('/contact', contactRoute);
app.use('/user', userRoute);

app.use('/images', express.static('./uploads'));


app.listen(3000, ()=>{
    console.log('server work !!');
})