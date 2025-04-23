const {Pool} = require('pg');
const pool = require('../utils/db_pgsql');


const entries = async()=> {
    try{
        const result  = await pool.query("SELECT id_entry, title, content, data, id_author,category");
        console.log(result);
    }catch(error){
        console.error(error)
    }
}

module.exports = entries;