

    // config for your database
    var config = {
        user: 'sanjiv',
        password: 'M0d!#c@$e#2o22',
        server: 'HO-65-LT-0034\\SQLEXPRESS', 
        database: 'BikeStores',
        port:1433,
        options:{
          trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true
        }
    };

    
module.exports=config; 