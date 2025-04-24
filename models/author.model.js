const { Pool } = require('pg');
const queries = require('../queries/author.queries.js') // Queries SQL
const pool = require('../config/db_pgsql'); //Abre coneccion con BBDD


const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createAuthor = async (author) => {
    const {id_author, name, surname, email, image} = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor,[id_author, name, surname, email, image]);
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

/*
const updateAuthor = async (author) => {
    const { name, surname, image, email} = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor,[
            name, 
            surname,
            image,
            email
            //old_title
        ]);

        console.log(queries.updateAuthor)
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}*/
const authors = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    //updateAuthor
}

module.exports = authors;


//PRUEBAS
// getAllAuthors()
// .then(data=>console.log(data))

//  getEntriesByEmail("birja@thebridgeschool.es")
// .then(data=>console.log(data)) 

/*{
    "id_author": 10,
    "name": "Carlus",
    "surname": "Rivera",
    "email": "carlus@thebridgeschool.es",
    "image": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
}*/
// createAuthor(newAuthor)
// .then(data => console.log(data));
/*
let updatedAuthors ={
    "name": "Carlus",
    "surname": "Rivera",
    "image": "https://randomuser.me/api/portraits/thumb",
    "email": "guillermu@thebridgeschool.es",
    "old_name": "Guillermo",
    "old_surname": "Muñoz"
};
updateAuthor("updatedAuthors")
.then(data=>console.log(data))*/
