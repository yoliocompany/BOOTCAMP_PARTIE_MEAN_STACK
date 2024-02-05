const express = require('express');

require('./config/connect');

const articleRoute = require('./routes/article');
const productRoute = require('./routes/product');

const app = express();
app.use(express.json());

// http://127.0.0.1:3000/


app.use('/article', articleRoute);
app.use('/product', productRoute);


app.listen(
    3000,
    () => {
        console.log('server workssss :)');
    }
);




