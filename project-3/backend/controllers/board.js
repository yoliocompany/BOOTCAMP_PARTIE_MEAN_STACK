const Board = require('../models/board');


const create = (req, res)=>{

    let data = req.body;
    let board = new Board(data);
    board.date = new Date();

    board.save()
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


module.exports = { create, byId, deleteBoard, update };