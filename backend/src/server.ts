import express from 'express';
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/authController')(app);

app.listen(3333);

console.log("Listen in 3333...")
