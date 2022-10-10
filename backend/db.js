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
// db.run('Drop TABLE tudos');

// knex.insert({
//     userId: 1,
//     title: 'et porro tempora',
//     completed: false
// }).into('tudos')
// .then();


knex('tudos')
.select('*')
// .whereIn('id',[5,6])
.then((e) => console.log(e))


