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
// db.run('CREATE TABLE links(id INTEGER PRIMARY KEY AUTOINCREMENT, projectId INT, git STRING, figma STRING, db STRING)');
// db.run('Drop TABLE projectTools');
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

// knex('tasks')
// .select('*')
// .then((e) => console.log(e))
// knex('tasks')
// .update('created_at', knex.raw('CURRENT_TIMESTAMP- 1 DAY'))
// .where('id',87)
// .then()
// knex('tasks')
// .select(knex.raw('count(*) as count, date(created_at) as date, status'))
// .groupBy(knex.raw('date(created_at)'))
// .where(knex.raw('date(created_at)'), '>=', day)
// .andWhere('status','completed')
// .then((date) => console.log(date))
// knex('tasks')
// .join('tudos', 'tudos.id', '=','tasks.projectId')
// .select('tudos.title','tasks.created_at')
// .groupBy(knex.raw('date(tasks.created_at)'))
// .where('tudos.id',20)
// .then((e) => console.log(e))

knex('links')
.update({
    figma: null,
    git: null
})
.where('projectId',28)
.then((e) => console.log(e))



















