const user = require('../models/user.js')

module.exports = {
    index: function(req, res) {

        if(req.params.path==='secret'){
            console.log('booo');
        }
        var response;
        if (req.query.gender) {
            console.log("here");
            response = user[req.params.path].filter(x => x.gender === req.query.gender)
        } else if (req.query.type) {
            response = user[req.params.path].filter(x => x.type === req.query.type)
        } else if (req.query.name) {
            console.log(req.query);
            console.log(req.params);
            response = user[req.params.path].filter(x => x.name === req.query.name)
            console.log(response);
        } else {
            response = user[req.params.path]
        }
        if (req.query.order === 'asc') {
            response.sort((x, y) => x.name > y.name)
        } else if(req.query.order === 'dec') {
            // console.log(response);
            response.sort((x, y) => x.name < y.name)
            // console.log(response);
        }

        res.status(200).json(response)

    },


    create: function(req, res) {
        console.log(user[req.params.path]);
        user[req.params.path].push(req.body)
        res.status(201).json(user[req.params.path])
    },


    update: function(req, res) {
        if (req.params.path === "location" || req.params.path === 'name') {
            user[req.params.path] = req.body
            res.status(201).json(user[req.params.path])
        }
    }
}
