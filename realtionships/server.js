const express = require('express');
require('./config/connect');

const User = require('./models/user');
const Groupe = require('./models/groupe');
const Membership = require('./models/membership');

const app = express();
app.use(express.json());

app.post('/ajoutuser', (req, res) => {

    let data = req.body;
    let user = new User(data);
    user.save()
        .then(
            (result) => {
                res.send(result);
            }
        )
        .catch(
            (err) => {
                res.send(err);
            }
        )

});

app.post('/ajoutgroupe', (req, res) => {

    let data = req.body;
    let groupe = new Groupe(data);
    groupe.save()
        .then(
            (result) => {
                res.send(result);
            }
        )
        .catch(
            (err) => {
                res.send(err);
            }
        )

});

app.post('/ajoutmembership', (req, res) => {

    let data = req.body;
    let member = new Membership(data);
    member.save()
        .then(
            (result) => {
                res.send(result);
            }
        )
        .catch(
            (err) => {
                res.send(err);
            }
        )

});

// app.get('/all', (req, res)=>{
//     Post.find().populate({
//         path: 'idUser',
//         model: 'User'
//     })
//     .exec()
//     .then(
//         (result)=>{
//             res.send(result);
//         }
//     )
//     .catch(
//         (err)=>{
//             res.send(err);
//         }
//     )
// })

app.get('/mygroups/:id', (req, res) => {

    let id = req.params.id;
    Membership.find({ user: id }).populate({
        path: 'groupe',
        model: 'Groupe'
    }).exec()
        .then(
            (result) => {
                res.send(result);
            }
        )
        .catch(
            (err) => {
                res.send(err);
            }
        )

})


app.get('/groupmembers/:id', (req, res) => {
    let id = req.params.id;

    Membership.find({groupe: id}).populate({
        path: 'user',
        model: 'User'
    })
    .exec()
    .then(
        (result) => {
            res.send(result);
        }
    )
    .catch(
        (err) => {
            res.send(err);
        }
    )

})




app.listen(3000, () => {
    console.log('server work');
})




