var mysql=require('mysql');
var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'Zimmer483*-*',
 database:'moviles2'
 
});
 module.exports=connection;