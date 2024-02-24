const Hero = require('../models/hero.model');


const create = (req, res)=>{

    let data = req.body;
    let hero = new Hero(data);
    hero.save()
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

}

const list = (req, res)=>{

    Hero.find()
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

}

const byId = (req, res)=>{

    Hero.findById({ _id: req.params.id })
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

}

const deleteHero = (req, res)=>{

    Hero.findByIdAndDelete({ _id: req.params.id })
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

}

const updateHero = (req, res)=>{

    Hero.findByIdAndUpdate({_id: req.params.id}, req.body )
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )


}




module.exports = { create, list, byId, deleteHero, updateHero };