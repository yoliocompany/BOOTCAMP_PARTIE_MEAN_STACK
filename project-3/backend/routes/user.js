const express = require('express');

const router = express.Router();

const { createUserAccount, signIn, list, byId, deleteUser, update } = require('../controllers/user');

const multer = require('multer')

let fileName = '';
const myStorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, redirect)=>{
        fileName= Date.now() + '.'+ file.mimetype.split('/')[1];
        redirect(null, fileName);
    }
})

const upload = multer({storage: myStorage});

router.post('/createuseraccount', upload.single('image') , (req, res)=>{
    createUserAccount(req, res, fileName);
    fileName = '';
});

router.post('/signin', signIn);
router.get('/list', list);
router.get('/byid/:id', byId );
router.delete('/delete/:id', deleteUser );

router.put('/update/:id', upload.single('image') , (req, res)=>{
    update(req, res, fileName);
    fileName= '';
} );


module.exports = router;