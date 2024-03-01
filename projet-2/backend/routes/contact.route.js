const express = require('express');
const router = express.Router();


const {
    create,
    myContactList,
    byId,
    deleteContact,
    updateContact
} = require('../controllers/contact.controller');

// config upload
const multer = require('multer');

let fileName = '';
const myStorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, redirect)=>{
        fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        redirect(null, fileName);
    }
})

const upload = multer({storage: myStorage});

router.post('/create', upload.single('image') ,(req, res)=>{

    create( req, res, fileName );
    fileName = '';
    
});




router.get('/mycontactlist/:idUser', myContactList);
router.get('/byid/:id', byId);
router.delete('/delete/:id', deleteContact);


router.put('/update/:id' , upload.single('image'), (req, res)=>{

    updateContact(req, res, fileName);
    fileName = '';
    
});




module.exports = router;
