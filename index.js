const express = require('express');
const bodyParser = require('body-parser');

const userCtrl = require('./controllers/userCtrl.js')
const middleware = require('./controllers/middleware.js')
const skillCtrl = require('./controllers/skillCtrl.js')

const port = 3000;

const app = express();

app.use(bodyParser.json())
app.use(middleware.addHeaders)
app.get('/secrets/:user/:pass',middleware.isUser, userCtrl.index)
app.get('/skills', skillCtrl.index)
app.post('/skills',skillCtrl.create)
app.get('/:target', userCtrl.index)
app.get('/:object/:value', userCtrl.show)

app.put('/:info', userCtrl.update)
app.post('/:arr/', userCtrl.create)



app.listen(port, function() {
    console.log(`app is running on port: ${port}`);
})
