var Connection = require('tedious').Connection;  
    var config = {
    	server: 'bi_test',
        database:'RIS',
        userName: 'sa',  
        password: 'p@ssw0rd1',  
        //userName: 'yourusername',  
        //password: 'yourpassword', 
        //server: 'LAPTOP-9RESSIQU\\SQLEXPRESS'
        // If you are on Microsoft Azure, you need this:  
        //options: {encrypt: true, database: 'AdventureWorks'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
        console.log("Connected");
        executeStatement();
    });  

    var Request = require('tedious').Request;
    var TYPES = require('tedious').TYPES;

   function executeStatement() {  
        Request = new Request("SELECT * FROM [RIS].[dbo].[CONT_PRINTING_MEMO] where CONTRACT_NO = '125550' order by CONTRACT_NO , times ", function(err) {  
        	if (err) {  
             console.log(err);}  
        	});  
         var result = "";  
         Request.on('row', function(columns) {  
             columns.forEach(function(column) {  
               if (column.value === null) {  
                 console.log('NULL');  
               } else {  
                 result+= column.value + " ";  
               }  
             });  
             console.log(result);  
             result ="";  
         });  
         Request.on('done', function(rowCount, more) {  
             console.log(rowCount + ' rows returned');  
         });  
         connection.execSql(Request);  
    }  

