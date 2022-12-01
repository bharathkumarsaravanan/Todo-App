const express = require('express');
const cors = require('cors')
const app = express();
const multer = require('multer')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');


app.use(express.static('public'))
app.use(express.json());
app.use(cors())
app.use(require('./index'))
app.use(require('./view'))
app.use(require('./tudos'))
app.use(require('./progress'))





app.listen(4000,function(){
    console.log('localhost:4000');
})