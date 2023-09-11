// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
  // host: 'sql12.freesqldatabase.com',
  // host: 'localhost',
  // user: 'sql12643599',
  // database: 'sql12643599',
  // password: '1UnX8VGBli'
  
  host: 'localhost',
  user: 'root',
  database: 'dashboard'
});

pool.getConnection()
.then(()=>{
    console.log('db connection successful');
}).catch(err =>{
    console.log('db =>>>>>>>>>>>>>>>>>>>>>>>>>'+'connection error');
    console.log(err);
})

module.exports = pool;