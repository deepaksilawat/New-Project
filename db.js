const Pool =require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'test@123',
    host: 'localhost',
    port: 5432,
    database: 'books'

});

module.exports = pool;