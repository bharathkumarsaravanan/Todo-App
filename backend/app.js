const express = require('express');
const cors = require('cors')
const app = express();



app.use(express.json());
app.use(cors())
app.use(require('./index'))
app.use(require('./view'))






app.listen(4000,function(){
    console.log('localhost:4000');
})