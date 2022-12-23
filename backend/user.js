const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')


const path = require('path');
const bodyParser = require('body-parser')

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(path.resolve(__dirname,'./data.db'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())

app.use(express.json());

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './data.db'
    },
    useNullAsDefault: true
});


router.use(function timeLog(req,res,next){
    // console.log('Time;',Date.now().toString())
    next();
});

router.get('/settings/projects', function(req,res){
    
    knex('features')
    .join('tudos','tudos.id','=','features.projectId')
    .select('tudos.title','features.imgurl')
    .groupBy('tudos.id')
    .then((data) => res.send({project:data}))

})

module.exports = router;
