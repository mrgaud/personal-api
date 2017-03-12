<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');

const userCtrl = require('./controllers/userCtrl.js')
const middleware = require('./controllers/middleware.js')
const skillCtrl = require('./controllers/skillCtrl.js')

const port = 3000;

=======
const express = require('express')
const bodyParser = require('body-parser')

const mainCtrl = require('./controllers/mainCtrl')
const middleware = require('./controllers/middleware')
const skillsCtrl = require('./controllers/skillsCtrl')
const secretCtrl = require('./controllers/secretCtrl')
const port = 3000;
>>>>>>> 77490f45a1a62929ed2c5c91b72cf8e874b68992
const app = express();

app.use(bodyParser.json())
app.use(middleware.addHeaders)
<<<<<<< HEAD
app.get('/secrets/:user/:pass',middleware.isUser, userCtrl.index)
app.get('/skills', skillCtrl.index)
app.post('/skills',skillCtrl.create)
app.get('/:target', userCtrl.index)
app.get('/:object/:value', userCtrl.show)

app.put('/:info', userCtrl.update)
app.post('/:arr/', userCtrl.create)



app.listen(port, function() {
    console.log(`app is running on port: ${port}`);
=======
app.get('/secret/:user/:pass', middleware.checkCredits, secretCtrl.index)
app.get('/skills', skillsCtrl.index)
app.post('/skills', middleware.giveId, skillsCtrl.create)
app.get('/:path', mainCtrl.index)
app.post('/:path', mainCtrl.create)
app.put('/:path', mainCtrl.update)


app.listen(port, function(){
    console.log("server is running on "+port);
>>>>>>> 77490f45a1a62929ed2c5c91b72cf8e874b68992
})
