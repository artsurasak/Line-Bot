var sql = require('mssql');
//var sql = require("msnodesqlv8");
var config = {
    //driver: "msnodesqlv8",
    server: 'LAPTOP-9RESSIQU\\SQLEXPRESS', 
    database:'LEAVE',
    user: 'sa',
    password: 'P@ssw0rd',
    options: {
                trustedConnection: true,
                useUTC: true
              }
    
}

function executesql(){
    var conn = new sql.Connection(config);
    var req = new sql.Request(conn);
    conn.connect(function (err){
        if(err){
            console.log(err);
            return;
        }
        req.query("select * from [LEAVE].[dbo].[DEPARTMENT] where DEPARTMENT_ID = 1 ",function(err,recordset){
            if(err){
                console.log(err);
            }else{
                console.log(recordset);
            }
            conn.close();
        });
    });
}
executesql();

// var Connection = require('tedious').Connection;  
//     var config = {
//     	// server: 'bi_test',
//      //    database:'RIS',
//      //    userName: 'sa',  
//      //    password: 'p@ssw0rd1',
        
//         server: 'localhost\\SQLEXPRESS', 
//         database:'LEAVE',
//         user: 'sa',
//         password: 'password'
//         //server: 'LAPTOP-9RESSIQU\\SQLEXPRESS',
        
//         //options: {encrypt: true, database: 'LEAVE'} 
//         // If you are on Microsoft Azure, you need this:  
//         // options: {
//         // instanceName: 'MSSQLSERVER',
//         // database: 'Test',  //the username above should have granted permissions in order to access this DB.
//         // debug: {
//         //     packet: false,
//         //     payload: false,
//         //     token: false,
//         //     data: false
//         // },
//         // //encrypt: true
//         // }
//     };  
//     var connection = new Connection(config);  
//     connection.on('connect', function(err) {  
//     // If no error, then good to proceed.  
//         console.log("Connected");
//         executeStatement();
//     });  

//     var Request = require('tedious').Request;
//     var TYPES = require('tedious').TYPES;

//    function executeStatement() {  
//         //Request = new Request("SELECT * FROM [RIS].[dbo].[CONT_PRINTING_MEMO] where CONTRACT_NO = '125550' order by CONTRACT_NO , times ", function(err) {  
        
//         Request = new Request("SELECT *  FROM [LEAVE].[dbo].[DEPARTMENT] ", function(err) {  
//         	if (err) {  
//                 console.log(err);}  
//         	});  
//             var result = "";  
//             Request.on('row', function(columns) {  
//                 columns.forEach(function(column) {  
//                     if (column.value === null) {  
//                         console.log('NULL');  
//                     } else {  
//                         result+= column.value + " ";  
//                     }  
//                 });  
//                 console.log(result);  
//                 result ="";  
//             });  
//             Request.on('done', function(rowCount, more) {  
//                 console.log(rowCount + ' rows returned');  
//             });  
//             connection.execSql(Request);  
    
//     }  

