const skills = require('../models/skills.js')

module.exports = {
    index:function(req,res){
        var response;
        if(req.query.exp){
            console.log(req.query.exp);
            response = skills.filter(x=>req.query.exp === x.experience)
            res.status(200).json(response)
            return
        }
        res.status(200).json(skills)
    },
    create:function(req,res){
        skills.push(req.body)
        res.status(200).json(skills)
    }
}
