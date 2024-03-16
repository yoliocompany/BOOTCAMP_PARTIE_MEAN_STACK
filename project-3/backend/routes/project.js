const express = require('express');

const router = express.Router();

const { create, list, byId, preview, deleteProject, update } = require('../controllers/project');


router.post('/create', create);
router.get('/list', list);
router.get('/byid/:id', byId);
router.get('/preview/:id', preview);
router.delete('/delete/:id', deleteProject);
router.put('/update/:id', update);


module.exports = router;