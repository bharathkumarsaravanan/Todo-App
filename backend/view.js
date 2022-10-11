const express = require('express');
const app = express();
const router = express.Router();

const path = require('path');
const bodyParser = require('body-parser')

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(path.resolve(__dirname,'./data.db'));

app.use(bodyParser.urlencoded({
    extended: true
}));

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

router.get('/view/:id',function(req,res){
    console.log(req.params.id);
    var id = req.params.id
    knex('tudos')
    .select('title')
    .where('id',id)
    .then((a) => 
    
    knex('projectTools')
    .join('tudos','projectTools.ProjectId','=','tudos.id')
    .join({a:'technologies'},'projectTools.frontend','=','a.id')
    .join({b:'technologies'},'projectTools.backend','=','b.id')
    .join({c:'technologies'},'projectTools.database','=','c.id')
    .select('projectTools.id','tudos.title','a.language as frontend','b.language as backend','c.language as database')
    .where('tudos.id',id)
    .then((data) => 
    
res.send({Item:data, title:a})));
})

router.get('/view/:id/add',function(req,res){
    console.log(req.params.id);
    var id = req.params.id;
    knex('technologies')
    .select('*')
    .where('type','frontend')
    .then((frame) =>
    
    knex('technologies')
    .select('*')
    .where('type','Server')
    .then((server) =>
    
    knex('technologies')
    .select('*')
    .where('type','database')
    .then((container) =>
        res.send({frontend:frame,backend:server,database:container})
    )
    )
    )
    
});

router.post('/view/:id/add',function(req,res) {

    var projectId = req.params.id;
    var newEntry = req.body;
    console.log(projectId,newEntry)

    knex.insert({
        ProjectId: projectId,
        frontend: newEntry.frontend,
        backend: newEntry.backend,
        database: newEntry.database,
    }).into('projectTools')
    .then(() => res.send({message: 'Tools Added'}));

})

router.post('/view/:id/remove', function(req,res){
    var body = req.body;
    console.log(body);
    knex('projectTools')
    .del()
    .where('id',body.id)
    .then(() => res.send({message: 'Tools deleted Successfully'}))
})

module.exports = router;
