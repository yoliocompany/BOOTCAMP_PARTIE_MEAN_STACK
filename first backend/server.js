const express = require('express');

require('./config/connect');

const articleRoute = require('./routes/article');
const productRoute = require('./routes/product');
const userRoute = require('./routes/user');

const app = express();
app.use(express.json());

// http://127.0.0.1:3000/


// test endpoint
app.get('/', (req, res)=>{
    res.send('server work :)');
})


app.use('/article', articleRoute);
app.use('/product', productRoute);
app.use('/user', userRoute);


app.use('/images' , express.static('./uploads'));


app.listen( 3000, () => { console.log('server workssss :)'); });




