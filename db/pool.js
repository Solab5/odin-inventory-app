const { Pool } = require('pg');
require("dotenv").config();


module.exports = new Pool({
    connectionString: process.env.DATABASE_URL
    // host: process.env.HOST,
    // user: process.env.USER,
    // database: process.env.DATABASE,
    // password: process.env.PASSWORD,
    // port: process.env.PORT
})