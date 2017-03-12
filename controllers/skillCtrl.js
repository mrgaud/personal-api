const skills = require('../models/skills.js')

module.exports = {
    index:function(req,res){
        if (req.query.experience) {
            let response = skills.filter(x=>x.experience === req.query.experience)
            return res.status(200).json(response)
        }
        res.status(200).json(skills)
    },
    create:function(req, res){
        console.log(req.body);
        skills.push(req.body)
        res.status(201).json(skills)
    }
}
