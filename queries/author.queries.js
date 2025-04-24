const queries = {
    getAllAuthors: `SELECT * FROM authors;`,
    getAuthorByEmail: `
    SELECT e.id_author,e.name,e.surname,e.email,e.image
    FROM authors AS e
    WHERE e.email=$1;`,
    createAuthor:`INSERT INTO authors(id_author,name, surname, email,image)
    VALUES($1, $2, $3, $4, $5)`,
    updateAuthor:`UPDATE authors
	SET  
        name=$1, 
        surname=$2, 
        image=$3
	WHERE 
        email=$4;`
}
module.exports = queries;