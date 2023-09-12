// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const pool = mysql.createPool({
  host: 'srv787.hstgr.io',
  user: 'u842521168_new',
  database: 'u842521168_new',
  password: 'Admin@123'
  
  // host: 'localhost',
  // user: 'root',
  // database: 'dashboard'
});

pool.getConnection()
.then(()=>{
    console.log('db connection successful');
}).catch(err =>{
    console.log('db =>>>>>>>>>>>>>>>>>>>>>>>>>'+'connection error');
    console.log(err);
})

module.exports = pool;