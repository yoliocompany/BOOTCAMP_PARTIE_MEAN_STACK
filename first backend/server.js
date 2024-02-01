const express = require('express');


const app = express();
app.use(express.json());

// POST GET PUT DELETE
// http://127.0.0.1:3000/


// creation article
app.post('/ajout', (req, res) => {

    let data = req.body;
    console.log(data);

    // .............

    res.send('bien recu !');

});

// list article

app.get('/list', (req, res) => {

    // ........................

    res.send('voila la liste des articles');

});


// article by id
app.get('/byid/:id', (req, res) => {

    // read id from req
    let myId = req.params.id;
    console.log(myId);
    // find in db

    // send res
    res.send('mezelt ma lawejtch');
})


// delete article
app.delete('/supp/:id', (req, res) => {
    
    // read id
    let myId = req.params.id;

    // delete


    // send response
    res.send('supp en cours');
})


// update article
app.put('/update/:id', (req, res) => {
    
    // read id from params
    let myId = req.params.id;
    // read new data from body
    let newData = req.body;


    // update in db

    
    // send response
    res.send('updated !!!')


})



app.listen(
    3000,
    () => {
        console.log('server workssss :)');
    }
);
