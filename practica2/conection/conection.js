const mysql =require ("mysql2");
  
// create the connection to database
const db = mysql.createConnection({
  host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
  user: 'testing',
  password: 'Pruebas%ALI%2020',
  database: 'testing_ali_fullstack'
});
 
export default db;