const express = require('express');

const router = express.Router();

const { create, byId, deleteBoard, update } = require('../controllers/board');


router.post('/create', create);
router.get('/byid/:id', byId);
router.delete('/delete/:id', deleteBoard);
router.put('/update/:id', update);



module.exports = router;