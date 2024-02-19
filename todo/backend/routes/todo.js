const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');


router.post('/ajout', (req, res)=>{

    let data = req.body;
    let todo = new Todo(data);
    todo.save()
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

router.get('/list', (req, res)=>{

    Todo.find()
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

router.delete('/delete/:id', (req, res)=>{

    let myId = req.params.id;
    Todo.findByIdAndDelete({ _id: myId })
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



module.exports = router;