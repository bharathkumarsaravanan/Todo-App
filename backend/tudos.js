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
    console.log('Time;',Date.now().toString())
    next();
});


router.get('/tudos',function(req,res){

    knex('tudos')
    .select('*')
    .then((tudos) => 
    res.send({tudos:tudos}));
})

router.post('/tudos',function(req,res){
    console.log(req.body);
    var body = req.body;

    knex.insert(body)
    .into('tasks')
    .then(() => res.send({message:'Task added successfully'}));

})

router.get('/tudos/:id',function(req,res){

    var id = req.params.id;

    knex('tasks')
    .join('tudos','tudos.id','=','tasks.projectId')
    .select('tasks.title','tasks.id','tasks.description')
    .where('tudos.id',id)
    .orderBy('tasks.id','desc')
    .then((tasks) => res.send({tasks:tasks}));
})



module.exports = router;
