const Client = require('../models/client');


const create = (req, res, fileName)=>{

    let data = req.body;
    let client = new Client(data);
    client.image = fileName;
    client.date = new Date();

    client.save()
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

const list = (req, res)=>{

    Client.find()
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

    Client.findById({ _id: req.params.id })
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

const deleteClient = (req, res)=>{

    Client.findByIdAndDelete({_id: req.params.id})
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

const update = (req, res, fileName)=>{

    let data = req.body;
    let id = req.params.id;

    if(fileName.length>0){
        data.image = fileName;
    }

    Client.findByIdAndUpdate({_id: id}, data)
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


module.exports = { create, list, byId, deleteClient, update };