var express = require('express');
var app = express();
var config=require('./dbconfig');
var sql = require("mssql");
const { json } = require('body-parser');


app.use((req, res, next)=> {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json());


app.get('/', function (req, res) {

    sql.connect(config,(err)=>{
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from candidate',(err, recordset)=> {
            if (err) console.log(err)
            res.send(recordset.recordsets[0]);
            });
        });
});

app.get('/:id', function (req, res) {

    const id=req.params.id

    console.log(id);
    const name="sanjiv"

        
    console.log(id);
    console.log(req.query.empid);
    sql.connect(config,(err)=>{
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select * from candidate where it='"+id+"'",(err, recordset)=> {
            if (err) console.log(err)
            res.send(recordset.recordsets[0]);
            });
        });
});

app.post('/add', function (req, res) {
      fname=req.body.user;
      console.log(req.body.user)
      data:any="";
      sql.connect(config,(err)=>{
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("insert into candidate(fullname) values('"+fname+"')",(err, recordset)=> {
            if (err) console.log(err)
            res.send(recordset.recordsets[0]);
            });
        });
      res.send('added');
      
    });
 
    app.delete('/del', function (req, res) {
        id=req.query.id;
        console.log(req.query.id)
        data:any="";
        sql.connect(config,(err)=>{
          if (err) console.log(err);
          var request = new sql.Request();
          request.query("delete from candidate where it='"+id+"'",(err, recordset)=> {
              if (err) console.log(err)
              
              });
          });
        res.send('Deleted');
        
      });
   
   

var server = app.listen(5000,()=>{
    console.log('Server is running..');
});