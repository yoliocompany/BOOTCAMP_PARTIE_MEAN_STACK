const express = require('express');
const router = express.Router();

const Product = require('../models/product');



router.post('/add', (req, res)=>{

    let data = req.body;
    let prod = new Product(data);

    prod.save()
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

})

router.get('/all', (req, res)=>{

    Product.find()
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
})

router.get('/getbyid/:id', (req, res)=>{


    Product.findById({ _id: req.params.id })
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

})

router.delete('/delete/:id', (req, res)=>{

    Product.findByIdAndDelete({ _id: req.params.id })
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

})

router.put('/edit/:id', (req, res)=>{

    Product.findByIdAndUpdate({ _id: req.params.id }, req.body )
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

})

module.exports = router;