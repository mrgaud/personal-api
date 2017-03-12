<<<<<<< HEAD
const secrets = require('../models/secrets')

=======
const skills = require('../models/skills')
const secret = require('../models/secrets')
>>>>>>> 77490f45a1a62929ed2c5c91b72cf8e874b68992
module.exports = {
    addHeaders: function(req, res, next) {
        res.status(200).set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Security-Policy': "default-src 'self' devmountain.github.io"
<<<<<<< HEAD
        })
        next();
    },
    isUser:function(req,res, next){
        let user = req.params.user;
        let pass = req.params.pass;
        if(user === secrets.userName && pass === secrets.pin){
            next()
=======
        });
        next();
    },
    giveId:function(req,res,next){
        let id = skills.length
        console.log(id);
        req.body.id = id+1
        next()
    },
    checkCredits:function(req,res,next){
        console.log(req.params.user === secret.user && req.params.pass === secret.pass);
        if(req.params.user === secret.user && req.params.pass === secret.pass){
            console.log(true);
            res.status(200)
            next();
        }
        else{
            res.status(403).json('Wrong password/userName')
>>>>>>> 77490f45a1a62929ed2c5c91b72cf8e874b68992
        }
    }
}
