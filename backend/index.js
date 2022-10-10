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

router.get('/',function(req,res){
    knex('tudos')
    .select('*')
    .then((tudoItems) => res.send({tudoItems}))
})

router.post('/delete',function(req,res){
    console.log(req.body.id);
    // const a = res.json({requestBody: req.body}) 
    var deleteId = req.body.id;
    knex('tudos')
    .del()
    .where('id',deleteId)
    .then(() => res.send({result :`${deleteId} deleted`}));
})

router.post('/create',function(req,res){
    console.log(req.body);

    var newElement = req.body;

    knex.insert({
        userId: newElement.userId,
        title:newElement.title,
        completed: newElement.status
    }).into('tudos')
    .then(() => res.send('Created successfully'))

})

router.get('/edit/:id',function(req,res){
    console.log(req.params.id);
    var id = req.params.id;

    knex('tudos')
    .select('*')
    .where('id',id)
    .then((data) => res.send({Editdata:data}))

})

router.post('/edit/:id',function(req,res){
    console.log(req.body);
    var newItem = req.body;

    knex('tudos')
    .update({
        userId: newItem.userId,
        title: newItem.title,
        completed: newItem.completed 
    })
    .where('id',newItem.id)
    .then(() => res.send({result: 'Edited Successfully'}))

})

router.get('/view/:id',function(req,res){
    console.log(req.params.id);
    var id = req.params.id
    knex('tudos')
    .select('*')
    .where('id', id)
    .then((data) => res.send({Item:data}));
})

module.exports = router;