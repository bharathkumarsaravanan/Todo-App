const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs')

const path = require('path');
const bodyParser = require('body-parser')

const sqlite3 = require('sqlite3');
const multer = require('multer');
const uploadFeature = multer({dest: 'public/images/features'})
const fileUpload = require('express-fileupload')
// const bodyParser = require('body-parser')
const db = new sqlite3.Database(path.resolve(__dirname,'./data.db'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(fileUpload());

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')))

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

router.get('/view/:id',function(req,res){
    console.log(req.params.id);
    var id = req.params.id
    knex('tudos')
    .select('title','description')
    .where('id',id)
    .then((data) => 
      res.send({Item:data}));
})

router.post('/view/:id/update',function(req,res){
    var projId = req.params.id;
    var body = req.body;
    knex('tudos')
    .where('id', projId)
    .update(body)
    .then(() => res.send({'result': 'edited'}))
})

router.get('/view/home/packages', function(req,res){
    knex('technologies')
    .select('*')
    .then((data) => res.send({data: data}))
})

router.get('/view/:id/home/packages',function(req,res){
    var id = req.params.id;
    console.log(id)

    knex('packages')
        .join('tudos','tudos.id','=','packages.projectId')
        .join('technologies','technologies.id','packages.technologyId')
        .select('technologies.id','technologies.name','technologies.use')
        .where('packages.projectId',id)
        .then((packages) => res.send({packages: packages}))

})
router.post('/view/:id/home/packages/update',function(req,res){
    var projId = req.params.id;
    var bodyData = req.body;
    console.log(bodyData)
    knex('packages')
    .where('projectId', projId)
    .del()
    .then(() => {
        bodyData.map((Items) => {
            knex.insert({
                projectId: projId,
                technologyId: Items.id
            }).into('packages')
            .then()
        }),
        res.send({message:'package updated'})
    })

})
router.get('/view/:id/home/features',function(req,res){
    var projId = req.params.id;
    knex('features')
    .select('*')
    .where('projectId', projId)
    .then((features) => res.send({features: features}))
})
router.post('/view/:id/home/features/upload',uploadFeature.single('featureImage'), function(req,res){
    var imgFile = req.file;
    var projectId = req.params.id;
    var title = req.body.title;
    var description = req.body.description;

    knex.insert({
        projectId: projectId,
        title: title,
        description: description 
    }).into('features')
    .then((id) => {
        console.log(imgFile)
        var ext = path.extname(imgFile.originalname)
        var newName = id[0]+ext;
        var newPath = path.join('public','images','features',newName)
        console.log(newPath)
        fs.renameSync(imgFile.path,newPath,function(err){
            if(err){
                console.log(err);
            }
        })
        knex('features')
        .update('imgurl',newName)
        .where('id',id)
        .then(() => {
            knex('features')
            .select('*')
            .where('id',id)
            .then((data) => res.send(data))
            })
    })
    
})
router.post('/view/:id/home/features/delete', function(req,res){
    var ids = req.body;
    console.log(ids);
    ids.map((id) => {
        knex('features')
        .select('*')
        .where(id,id.id)
        .then((data) => {
            fs.unlink(path.join(__dirname,'public','images','features',data[0].imgurl), (err) => {
                if(err){
                    throw err;
                }
            })
            knex('features')
            .del()
            .where(id, id.id)
            .then()
        })
    })
    res.send({msg: 'successfully sent'})
})
router.get('/view/:id/featureimage/:featureid', function(req,res){
    var projId = req.params.id;
    var featureId = req.params.featureid;
    knex('features')
    .select('*')
    .where('id', featureId)
    .then(data => res.send({data: data}))
})


module.exports = router;
