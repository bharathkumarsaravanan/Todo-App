const sqlite3 = require('sqlite3');
const path = require('path')
const db = new sqlite3.Database(path.resolve(__dirname,'./data.db'));


const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './data.db'
    },
    useNullAsDefault: true
});



// db.run('CREATE TABLE tudos(id INTEGER PRIMARY KEY AUTOINCREMENT, userId INT, title STRING, completed BOOLEAN)');
// db.run('CREATE TABLE projectTools(id INTEGER PRIMARY KEY AUTOINCREMENT,ProjectId INT, frontend INT, backend INT, database INT)');
// db.run('CREATE TABLE tudoList(id INTEGER PRIMARY KEY AUTOINCREMENT, tudoId INT, projectId INT)');
// db.run('CREATE TABLE technologies(id INTEGER PRIMARY KEY AUTOINCREMENT, language STRING, type STRING)');
// db.run('CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING)');
// db.run('CREATE TABLE tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING, description STRING, projectId INT)');
// db.run('Drop TABLE projectTools');
// db.run('ALTER TABLE tasks ADD COLUMN status STRING');

// db.run('ALTER TABLE technologies RENAME COLUMN type to use')

// knex.insert({
//    name:'Vikram'
// }).into('Users')
// .then((e) => console.log(e));

// knex.insert({
//     title: 'Home page',
//     description: 'Making interface',
//     projectId: 12,
//     status:'todo'
// }).into('tasks')
// .then((e) => console.log(e))


// knex('tasks')
// .select('*')
// .then((e) => console.log(e))

// knex('tudos')
// .join('tasks','tudos.id','=','tasks.projectId')
// .select('tudos.title as App',knex.raw('count(*) as completed'))
// .groupBy('tudos.title')
// .where('status','completed')
// .then((e) => console.log(e))

// knex('tudos')
// .update({description: 'Remember those times when the only source of music was CD collections, and if you wanted to listen to something new, you needed to buy a new CD or exchange it with your classmates? Now, thanks to music apps, you have access to any track by any singer available on the Internet.  As well as this, those apps created new standards for music applications – they should be fast, consume fewer resources, and deliver tracks to users in a matter of clicks. Also, there are different types of music apps- streaming, store, and storage apps. And, if you consider developing a music application, you need to choose the app type and examine its main features. This article will guide you through the process of music app development.'})
// .where('id',38)
// .then()
knex('technologies')
.select('*')
.then((e) => console.log(e))









