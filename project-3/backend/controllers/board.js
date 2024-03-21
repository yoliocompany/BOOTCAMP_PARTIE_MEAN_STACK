const Board = require('../models/board');


const createBoard = (id)=>{

 
    let board = new Board();
    board.project = id;
    board.date = new Date();

    board.save()
        .then(
            (result)=>{
               console.log('created');
            }
        )
        .catch(
            (err)=>{
               console.log(err);
            }
        )

}

const byId = (req, res)=>{
    let id = req.params.id;

    Board.findOne({ project: id })
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

}

const deleteBoard = (req, res)=>{

    Board.findByIdAndDelete({ _id: req.params.id })
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

}

const update = (req, res)=>{

    let data = req.body;
    let id = req.params.id;

    Board.findByIdAndUpdate({ _id: id } , data)
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
}


module.exports = { createBoard, byId, deleteBoard, update };