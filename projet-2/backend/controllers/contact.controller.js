const Contact = require('../models/contact.model');


const create = (req, res, fileName)=>{

    let data = req.body;
    let con = new Contact(data);
    con.image = fileName;

    con.save()
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

const myContactList = (req, res)=>{

    Contact.find({ idUser: req.params.idUser })
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

    Contact.findById({_id: req.params.id})
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

const deleteContact = (req, res)=>{

    Contact.findByIdAndDelete({ _id: req.params.id })
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

const updateContact = (req, res, fileName)=>{

    let id = req.params.id;
    let data = req.body;
   
    if(fileName.length > 0){
        data.image = fileName;
    }

    Contact.findByIdAndUpdate( { _id: id }, data )
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


module.exports = {
    create,
    myContactList,
    byId,
    deleteContact,
    updateContact
}