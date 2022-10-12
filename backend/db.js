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
// db.run('Drop TABLE projectTools');

// knex.insert({
//    name:'Vikram'
// }).into('Users')
// .then((e) => console.log(e));

knex('Users')
.select('*')
.then((e) => console.log(e))









