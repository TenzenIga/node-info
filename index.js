const Pool = require('pg-pool')
const express  = require('express');
const env = require('dotenv');

const app = express()


env.config();


const envString = process.env.NODE_ENV.toUpperCase()


const port = process.env.PORT || 5000;



const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:process.env['DB_NAME_' + envString],
    password:process.env['DB_PASSWORD_' + envString],
    port:5432
});


app.get('/', async (req, res)=>{
    const ret = await pool.query('SELECt * FROM users')    
    res.json(ret.rows )
})

app.listen(port, ()=>{
    console.log('Started server');
    
})