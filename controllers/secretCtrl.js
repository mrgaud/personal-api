const secret = require('../models/secrets')
console.log(secret.message);
module.exports = {
    index:function(req, res){
        res.status(200).json(secret.message)
    }
}
