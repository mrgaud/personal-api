const express = require('express')
const bodyParser = require('body-parser')

const mainCtrl = require('./controllers/mainCtrl')
const middleware = require('./controllers/middleware')
const skillsCtrl = require('./controllers/skillsCtrl')
const secretCtrl = require('./controllers/secretCtrl')
const port = 3000;
const app = express();

app.use(bodyParser.json())
app.use(middleware.addHeaders)
app.get('/secret/:user/:pass', middleware.checkCredits, secretCtrl.index)
app.get('/skills', skillsCtrl.index)
app.post('/skills', middleware.giveId, skillsCtrl.create)
app.get('/:path', mainCtrl.index)
app.post('/:path', mainCtrl.create)
app.put('/:path', mainCtrl.update)


app.listen(port, function(){
    console.log("server is running on "+port);
})
