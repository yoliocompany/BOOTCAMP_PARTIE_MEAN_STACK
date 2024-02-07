const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// upload files config

const multer = require('multer');
let fileName = '';
const myStorage = multer.diskStorage({
    destination: './uploads',
    filename: ( req, file , redirect  )=>{      
        fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        redirect(null , fileName);
    }
})

const upload = multer({ storage: myStorage });

router.post('/add', upload.single('image'), (req, res)=>{
    let data = req.body;
    let prod = new Product(data);
    prod.image = fileName;
    prod.save()
        .then(
            (result)=>{
                fileName = '';
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