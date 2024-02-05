const express = require('express');
const router = express.Router();

const Article = require('../models/article');



// creation article
router.post('/ajout', (req, res) => {
    // 1 read data req
    let data = req.body;
    // 2 instance ml model
    let art = new Article(data);

    // 3 save f db
    art.save() //essayed eli tsajel
        .then(
            (savedArticle) => {
                res.send(savedArticle);
            }
        )
        .catch(
            (err) => {
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


router.get('/list', (req, res) => {

    Article.find() // list des articles [  ]
        .then(
            (list) => {
                res.send(list);
            }
        )
        .catch(
            (err) => {
                res.send(err)
            }
        )

});


// article by id
router.get('/byid/:id', (req, res) => {

    // read id from req
    let myId = req.params.id;

    Article.findById({ _id: myId })
        .then(
            (article) => {
                res.send(article);
            }
        )
        .catch(
            (err) => {
                res.send(err)
            }
        )
})


// delete article
router.delete('/supp/:id', (req, res) => {

    // read id
    let myId = req.params.id;

    Article.findByIdAndDelete({ _id: myId })
        .then(
            (deletedArticle) => {
                res.send(deletedArticle);
            }
        )
        .catch(
            (err) => {
                res.send(err)
            }
        )
})


// update article
router.put('/update/:id', (req, res) => {

    // read id from params
    let myId = req.params.id;
    // read new data from body
    let newData = req.body;


    Article.findByIdAndUpdate( { _id: myId }, newData )
        .then(
            (updatedArticle) => {
                res.send(updatedArticle);
            }
        )
        .catch(
            (err) => {
                res.send(err)
            }
        )



})




module.exports = router;