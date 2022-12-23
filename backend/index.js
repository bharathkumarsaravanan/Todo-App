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

router.post('/login', function(req,res){
    var body = req.body;
    knex('users')
    .select('id')
    .where('email', body.email)
    .andWhere('password',body.password)
    .then((data) => res.send({data: data}))
})

router.get('/',function(req,res){
    knex('tudos')
    .select('*')
    .then((tudoItems) => res.send({tudoItems}))
})

router.post('/delete',function(req,res){
    console.log(req.body.id);
    var deleteId = req.body.id;
    knex('tudos')
    .del()
    .where('id',deleteId)
    .then(() =>
        knex('links')
        .del()
        .where('projectId', deleteId)
        .then(
        knex('packages')
        .del()
        .where('projectId', deleteId)
        .then(() => 
            knex('tasks')
            .del()
            .where('projectId', deleteId)
            .then(() => res.send({result :`${deleteId} deleted`})))));
})

router.get('/create',function(req,res){
    knex('technologies')
    .select('*')
    .then((tech) => res.send({techs: tech}))
})

router.post('/create',function(req,res){
    console.log(req.body.project);
    console.log(req.body.packs);
    var newElement = req.body.project;
    var packages = req.body.packs;
    knex.insert({
        title: newElement.title,
        description: newElement.description,
        created_at: knex.raw('CURRENT_TIMESTAMP')
    })
    .into('tudos')
    .then((projectId) => 
        knex.insert({
            projectId: projectId
        })
        .into('links')
        .then(
        knex('tudos')
        .select('*')
        .where('id', projectId)
        .then((newItem) => 
            res.send({newItem: newItem}),
            packages.map((pack,index) => {
                if(index !== 0){
                    knex.insert({
                        projectId: projectId,
                        technologyId: pack.id
                    })
                    .into('packages')
                    .then()
                
            }}))),
     )
      
        // .then((newItem) => )

})

router.get('/edit/:id',function(req,res){
    console.log(req.params.id);
    var id = req.params.id;
    knex('tudos')
    .select('*')
    .where('id', id)
    .then((data) => 
        knex('packages')
        .join('technologies','packages.technologyId','=','technologies.id')
        .select('technologies.name')
        .where('packages.projectId',id)
        .then((packages) => res.send({defaultData: data, defaultPackages: packages })
    ))

})

router.post('/edit/:id',function(req,res){
    console.log(req.body);
    var newItem = req.body;

    knex('tudos')
    .update({
        userId: newItem.userId,
        title: newItem.title
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