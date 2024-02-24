const express = require('express');
const router = express.Router();

const { create, byId, list, deleteHero, updateHero } = require('../controllers/hero.controller');

router.post('/ajout', create)

router.get('/list', list)

router.get('/byid/:id', byId)

router.delete('/delete/:id', deleteHero)

router.put('/update/:id', updateHero)


module.exports = router;