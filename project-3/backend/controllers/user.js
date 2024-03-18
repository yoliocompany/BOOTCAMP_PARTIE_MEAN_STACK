const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const createAdminAccount = async () => {

    try {

        let existAdmin = await User.find({ role: 'admin' });
        if (existAdmin.length == 0) {

            let data = {

                fullname: 'ADMIN ADMIN',
                email: process.env.EMAIL,
                password: process.env.PASS,
                image: 'admin.png',
                tel: process.env.TEL,
                role: 'admin',
                date: new Date()

            }

            let admin = new User(data);
            admin.password = bcrypt.hashSync(data.password, 10);

            await admin.save();
            console.log('admin created , you can use the application now !');

        } else {
            console.log('admin already exist');
        }

    } catch (error) {
        console.log(error);
    }

}

const createUserAccount = async (req, res, fileName) => {

    try {

        let { fullname, email, password, tel, tags } = req.body;

        tags = JSON.parse(tags);
        let user = new User({ fullname, email, password, tel, tags });
        user.password = bcrypt.hashSync(password, 10);
        user.image = fileName;
        user.role = 'user';
        user.date = new Date();

        let result = await user.save();
        res.send(result);

    } catch (error) {
        console.log(error);
        res.send(error);
    }

}

const signIn = (req, res) => {

    try {



    } catch (error) {
        res.send(error)
    }

}

const list = async (req, res) => {

    try {

        let users = await User.find({ role: 'user' }, { password: 0 });
        res.send(users);

    } catch (error) {
        res.send(error)
    }

}


const byId = async (req, res) => {

    try {

        let user = await User.findById({ _id: req.params.id }, { password: 0 });
        res.send(user)

    } catch (error) {
        res.send(error)
    }

}

const deleteUser = async (req, res) => {

    try {
        
        let deletedUser = await User.findByIdAndDelete({ _id: req.params.id });
        res.send(deletedUser);
        
    } catch (error) {
        res.send(error)
    }

}

const update = (req, res) => {

    try {
        


    } catch (error) {
        res.send(error)
    }

}


module.exports = { createAdminAccount, createUserAccount, signIn, list, byId, deleteUser, update };