const express = require('express');

require('./config/connect');


// import models
const Article = require('./models/article');

const app = express();
app.use(express.json());

// POST GET PUT DELETE
// http://127.0.0.1:3000/


// creation article
app.post('/ajout', (req, res) => {  
    // 1 read data req
    let data = req.body;
    // 2 instance ml model
    let art = new Article( data );
    // 3 save f db
    art.save() //essayed eli tsajel
        .then(
            ( savedArticle )=>{
                res.send(savedArticle);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
});

// list article

// find(  ) : [  ]
// find( { categorie: 'web' } ): [  ]

// findOne() : {}
// findOne({ _id: 'dqsdqsdqsd' }) : {}

// findById({ _id: 'qsdqsdqsd' }) : {}


app.get('/list', (req, res) => {

    Article.find() // list des articles [  ]
        .then(
            ( list )=>{
                res.send(list);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

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




// homework

// 1 get by Id

// 2 create new model : product
/**
 * title: String
 * description : String
 * price: Number
 * image: String
 * 
 * create apis:
 * 
 * ajout / allproduct / byid / delete / update
 */