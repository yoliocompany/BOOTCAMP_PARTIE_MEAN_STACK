const express = require('express');
const router = express.Router();

const Hero = require('../models/hero');


const multer = require('multer');
filename = '';

const myStorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file , redirect)=>{
        filename = Date.now() + '.' + file.mimetype.split('/')[1];
        redirect(null, filename);
    }
})

const upload = multer({storage: myStorage});

router.post('/ajout' , upload.single('image') , (req, res)=>{

    let data = req.body;
    let hero = new Hero(data);
    hero.image = filename;

    hero.save()
        .then(
            (savedHero)=>{
                filename = '';
                res.send(savedHero);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

})

router.post('/add' , (req, res)=>{
    let data = req.body;
    let hero = new Hero(data);

    hero.save()
        .then(
            (savedHero)=>{
                res.send(savedHero);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

})

router.get('/all', (req, res)=>{

    Hero.find()
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

})


router.get('/byid/:id', (req, res)=>{

    let myId = req.params.id;
    Hero.findOne({ _id: myId })
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

})

router.delete('/delete/:id', (req, res)=>{

    let myId = req.params.id;
    Hero.findByIdAndDelete({_id: myId})
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
})

router.put('/update/:id', (req, res)=>{

    let myId = req.params.id;
    let newData = req.body;

 
    Hero.findByIdAndUpdate( { _id: myId } , newData )
        .then(
            (result)=>{
        
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

})


module.exports = router;