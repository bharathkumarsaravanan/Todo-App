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
// db.run('Drop TABLE projectTools');
// db.run('ALTER TABLE tudos DROP COLUMN userId');
knex('features')
.del()
.where('projectId',20)
.then()

knex('features')
.select('*')
.then((e) => console.log(e))




















