const express = require('express');
const router = express.Router();

const User = require('../models/user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post( '/signup' , (req, res)=>{

    let data = req.body;
    let usr = new User(data)

    let cryptedPass = bcrypt.hashSync( data.password , 10 );
    usr.password = cryptedPass;

    usr.save()
        .then(
            (savedUser)=>{
                savedUser.password = '';
                res.send(savedUser)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )

} );


router.post( '/signin', (req, res)=>{

    let { email, password } = req.body;
    
    User.findOne({ email:  email})
        .then(
            (user)=>{

                if(!user){
                    res.send('email or password invalid');
                }else{

                    console.log(user);
                    let validPass = bcrypt.compareSync( password, user.password );
                    if( validPass == false ){
                        res.send('email or password invalid');
                    }else{

                        // alkzejalkzejaleazelkje.lzkaejalzkjeazlkejaze.lkazjelkazeja
                        let payload = {
                            _id: user._id,
                            fullname: user.fullname,
                            email: user.email
                        }

                        let token = jwt.sign( payload, '123456789' )
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

} )




module.exports = router;