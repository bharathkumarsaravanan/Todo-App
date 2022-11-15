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
// db.run('CREATE TABLE packages(id INTEGER PRIMARY KEY AUTOINCREMENT, projectId INT, technologyId INT)');
// db.run('Drop TABLE projectTools');
// db.run('ALTER TABLE tudos DROP COLUMN userId');

// db.run('ALTER TABLE technologies RENAME COLUMN type to use')





// knex('tudos')
// .join('tasks','tudos.id','=','tasks.projectId')
// .select('tudos.title as App',knex.raw('count(*) as completed'))
// .groupBy('tudos.title')
// .where('status','completed')
// .then((e) => console.log(e))

// knex('packages')
// .join('tudos','tudos.id','=','packages.projectId')
// .join('technologies','technologies.id','packages.technologyId')
// .select('tudos.title','technologies.name')
// .where('packages.projectId',28)
// .then((e) => console.log(e))



        knex('tudos')
        .select('*')
        .then((e) => console.log(e))









