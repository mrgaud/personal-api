const user = require('../models/user')
const secrets = require('../models/secrets')
module.exports = {
    index: function(req, res) {
        console.log(req.query.order);
        if (req.query.order === 'asc') {
            user[req.params.target].sort((x, y) => x.name > y.name)
        }
        if (req.query.order === 'dec') {
            user[req.params.target].sort((x, y) => x.name < y.name)
        }
        console.log(req.params.target);
        res.status(200).json(user[req.params.target])
    },

    show: function(req, res) {
        console.log(req.params);
        let rpm = req.params.value
        let key = req.params.object
        if (key === 'hobbies') {
            var response = user[key].filter(x => x.type === rpm)
        } else if (key === 'family') {
            var response = user[key].filter(x => x.gender === rpm)
        } else if (key === 'restaurants') {
            var response = user[key].filter(x => x.type === rpm)
        } else {
            var response = user[key]
        }
        res.status(200).json(response)
    },
    create: function(req, res) {
        console.log(req.params);
        user[req.params.arr].push(req.body)
        res.status('201').json(user[req.params.arr])
    },
    update:function(req, res){
        user[req.params.info] = req.body
        res.status(201).json(user[req.params.info])
    }
}
