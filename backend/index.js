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
    .join('Users','tudos.userId','=','Users.id')
    .select('tudos.id','Users.name as userName','tudos.title','tudos.completed')
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

router.get('/create',function(req,res){
    knex('Users')
    .select('*')
    .then((users) => res.send({users:users}));
})

router.post('/create',function(req,res){
    console.log(req.body);

    var newElement = req.body;

    knex.insert({
        userId: newElement.userId,
        title:newElement.title,
        completed: newElement.status
    }).into('tudos')
    .then(() => res.send({message:'Created successfully'}))

})

router.get('/edit/:id',function(req,res){
    console.log(req.params.id);
    var id = req.params.id;

    knex('tudos')
    .join('Users','tudos.userId','=','Users.id')
    .select('tudos.id','Users.id as userId','Users.name as userName','tudos.title','tudos.completed')
    .where('tudos.id',id)
    .then((data) =>  
        knex('users')
        .select('*')
        .then((users) => res.send({Editdata:data,users:users}) ))

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

});

router.get('/users',function(req,res){

    knex('Users')
    .select('*')
    .then(
        
        (users) => res.send({users: users}));
})

router.get('/users/:id',function(req,res){

    var id = req.params.id;
    knex('Users')
    .join('tudos','Users.id','=','tudos.userId')
    .select('Users.id','Users.name','tudos.id as projectid','tudos.title')
    .where('Users.id',id)
    .then((projects) => res.send({projects:projects}));
})



module.exports = router;