var config=require('./dbconfig');
var sql = require('mssql');

// make sure that any items are correctly URL encoded in the connection string
  sql.connect(config);
  const result = sql.query('select * from emoloyee');
  console.log(result)
  




