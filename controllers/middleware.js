const secrets = require('../models/secrets')

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
        })
        next();
    },
    isUser:function(req,res, next){
        let user = req.params.user;
        let pass = req.params.pass;
        if(user === secrets.userName && pass === secrets.pin){
            next()
        }
    }
}
