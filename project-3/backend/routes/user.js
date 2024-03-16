const express = require('express');

const router = express.Router();

const { createUserAccount, signIn, list, byId, deleteUser, update } = require('../controllers/user');


router.post('/createuser', createUserAccount);
router.post('/signin', signIn);
router.get('/list', list);
router.get('/byid/:id', byId );
router.delete('/delete/:id', deleteUser );
router.put('/update/:id', update );


module.exports = router;