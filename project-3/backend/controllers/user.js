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

const signIn = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if(!user){
           return res.send('email or password invalid');
        }   

        const valid = bcrypt.compareSync( password, user.password );

        if(!valid){
            return res.send('email or password invalid');
        }

        let payload = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            tel: user.tel,
            image: user.image,
            role: user.role,
            tags: user.tags,
            date: user.date
        }

        let token = jwt.sign( payload, process.env.SECRET_KEY );
        res.send({ myToken: token });

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

const update = async (req, res, fileName) => {

    try {
        
        let id = req.params.id;
        let data = req.body;
        data.tags = JSON.parse(data.tags);

        if(fileName.length > 0){
            data.image = fileName;
        }

        if(data.password){
            data.password = bcrypt.hashSync(data.password, 10);
        }

        let updatedUser = await User.findByIdAndUpdate({_id: id}, data);
        
        res.send(updatedUser);


    } catch (error) {
        res.send(error)
    }

}


module.exports = { createAdminAccount, createUserAccount, signIn, list, byId, deleteUser, update };