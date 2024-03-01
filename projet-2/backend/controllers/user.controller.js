const User = require('../models/user.model');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signUp = (req, res) => {
    
    let data = req.body;
    let user = new User(data);
    user.password = bcrypt.hashSync(data.password, 10);

    user.save()
        .then(
            (result) => {
                res.send(result);
            }
        )
        .catch(
            (err) => {
                res.send(err)
            }
        )

}

const signIn = (req, res) => {
    let { email, password } = req.body;
    User.findOne({email: email})
        .then(
            (user)=>{
                if(!user){
                    res.send({ message: 'email or password invalid' })
                }else{
                    let valid = bcrypt.compareSync(password, user.password);
                    if(!valid){
                        res.send({ message: 'email or password invalid' })
                    }else{
                        let payload = {
                            _id: user._id,
                            name: user.name,
                            lastname: user.lastname,
                            email: user.email
                        }
                        let token = jwt.sign( payload, '123456789' );
                        res.send(token);
                    }
                }
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
}


module.exports = {
    signUp,
    signIn
}






const register = async (req, res) => {
    
    try {

        let data = req.body;
        let user = new User(data);
        user.password = bcrypt.hashSync(data.password, 10);

        let result = await user.save()

        res.send(result);

    } catch (error) {
        res.send(error)
    }
    
}