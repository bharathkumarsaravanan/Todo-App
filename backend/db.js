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
// db.run('CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING, email STRING, password STRING)');
// db.run('CREATE TABLE links(id INTEGER PRIMARY KEY AUTOINCREMENT, projectId INT, git STRING, figma STRING, db STRING)');
// db.run('Drop TABLE users');
// db.run('ALTER TABLE tudos DROP COLUMN userId');
// db.run('ALTER TABLE features ADD COLUMN description STRING');
// db.run('UPDATE tasks SET created_at = DEFAULT CURRENT_TIMESTAMP')




var today = new Date();

today.setDate(today.getDate() - 10)

var date = ("0" + today.getDate()).slice(-2);
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var year = today.getFullYear()
var day = year + '-' + month+ '-' + date
console.log(day);

knex('features')
.select('*')
.then((e) => console.log(e))























