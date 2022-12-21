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
router.get('/progress/today',function(req,res){
    var today = new Date();
    var date = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var year = today.getFullYear();
    var day = year + '-' + month+ '-' + date
    console.log(day);
    knex('tasks')
    .select(knex.raw('status,count(id) as count'))
    .groupBy('status')
    .where(knex.raw('date(created_at)'),day)
    .then((todayProg) => 
        knex('tasks')
        .select(knex.raw('count(*) as total'))
        .where('status','todo')
        .then((tot) => res.send({totalCount:tot, todayProgress: todayProg})))
})
router.get('/progress/lasttendays',function(req,res){
    var today = new Date();

    today.setDate(today.getDate() - 10)

    var date = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var year = today.getFullYear()
    var day = year + '-' + month+ '-' + date
    knex('tasks')
    .select(knex.raw('count(*) as count, date(created_at) as date, status'))
    .groupBy(knex.raw('date(created_at)'))
    .where(knex.raw('date(created_at)'), '>=', day)
    .andWhere('status', 'completed')
    .then((date) => 
        knex('tasks')
        .join('tudos', 'tasks.projectId', '=', 'tudos.id')
        .select(knex.raw('count(*) as count, tudos.title, tasks.status'))
        .groupBy('tudos.title')
        .where(knex.raw('date(tasks.created_at)'), '>=', day)
        .andWhere('tasks.status','completed')
        .orderBy('count', 'desc')
        .then((taskCount) => res.send({todo:date, taskCount:taskCount})))
})
router.get('/progress/activities',function(req,res){
    knex('features')
    .join('tudos','tudos.id','=','features.projectId')
    .select(knex.raw('count(*) as count,tudos.title'))
    .groupBy('tudos.title')
    .then((data) =>
        knex('tasks')
        .join('tudos', 'tudos.id','=','tasks.projectId')
        .select(knex.raw('tudos.title, count(*) as count'))
        .groupBy('tudos.title')
        .then((taskCount) => res.send({featureCount: data, taskCount: taskCount})))
})

// view -> Acivities page

router.get('/progress/project/:id', function(req,res){
    var projectId = req.params.id;
    knex('tasks')
    .join('tudos', 'tudos.id', '=','tasks.projectId')
    .select(knex.raw('tudos.title as projectName,date(tasks.created_at) as title,count(tasks.status) as count, date(tudos.created_at) as projectDate'))
    .groupBy(knex.raw('date(tasks.created_at)'))
    .where('tudos.id',projectId)
    .then((data) => 
        knex('tasks')
        .select(knex.raw('status, count(*) as count'))
        .groupBy('status')
        .where('projectId',projectId)
        .then((tasksCount) => res.send({data: data, tasksCount: tasksCount})))
})
router.get('/progress/:id/activities', function(req,res){
    var projId = req.params.id;
    knex('tasks')
    .select(knex.raw('date(created_at) as date, time(created_at) as time, title, status'))
    .where('projectId', projId)
    .then(data => res.send({tasks: data}))
})


module.exports = router;
