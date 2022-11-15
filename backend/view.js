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
    // console.log('Time;',Date.now().toString())
    next();
});

router.get('/view/:id',function(req,res){
    console.log(req.params.id);
    var id = req.params.id
    knex('tudos')
    .select('title','description')
    .where('id',id)
    .then((data) => 
      res.send({Item:data}));
})

router.post('/view/:id/update',function(req,res){
    console.log(req.params.id)
    console.log(req.body)
    var projId = req.params.id;
    var body = req.body;
    knex('tudos')
    .where('id', projId)
    .update(body)
    .then(() => res.send({'result': 'edited'}))
})

router.get('/view/:id/home/packages',function(req,res){
    var id = req.params.id;
    console.log(id)

    knex('packages')
        .join('tudos','tudos.id','=','packages.projectId')
        .join('technologies','technologies.id','packages.technologyId')
        .select('technologies.name','technologies.use')
        .where('packages.projectId',id)
        .then((packages) => res.send({packages: packages}))

})


router.post('/view/:id/remove', function(req,res){
    var body = req.body;
    console.log(body);
    knex('projectTools')
    .del()
    .where('id',body.id)
    .then(() => res.send({message: 'Tools deleted Successfully'}))
})

router.get('/update/:id/update/:listid',function(req,res){
    var entryId = req.params.listid;

    knex('projectTools')
    .select('*')
    .where('id',entryId)
    .then((data) => res.send({selected:data}));
})

router.post('/update/:id/update/:listid',function(req,res){
    var body = req.body;
    var entryId = req.params.listid;
    console.log(body);  

    knex('projectTools')
    .where('id',entryId)
    .update(body)
    .then(() => res.send({message: 'Tools updated'}))

})

module.exports = router;
