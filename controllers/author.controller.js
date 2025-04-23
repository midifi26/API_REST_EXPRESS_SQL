const authors = require("../models/author.model.js");

const getAuthor = async (req, res) => {
  let author;
  try {
    if (req.query.email) {
      author = await authors.getAuthorByEmail(req.query.email);
    } else {
      author = await authors.getAllAuthors();
    }
    res.status(200).json(author); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

const createAuthor = async (req, res) => {
  let newAuthor = req.body;
  if(
    "id_author" in newAuthor &&
    "name" in newAuthor &&
    "surname" in newAuthor &&
    "email" in newAuthor &&
    "image" in newAuthor
  ){
    try {
      const response = await authors.createAuthor(newAuthor);
      res.status(201).json({
        message : `Usuario creado con el email: ${newAuthor.email}`,
    });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  }else{
    res.status(400).json({ error: "Faltan campos en la entrada" });
}
};
/*
const updateAuthor = async (req, res) => {
  let modifiedAuthor = req.body;
  if(
    "name" in modifiedAuthor &&
    "surname" in modifiedAuthor &&
    "image" in modifiedAuthor &&
    "email" in modifiedAuthor 
    
  ){
    try {
      const response = await authors.updateAuthor(modifiedAuthor);
      res.status(201).json({
        items_updated: response,
        message : `Usuario modificado con el email: ${modifiedAuthor.email}`,
    });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  }else{
    res.status(400).json({ error: "Faltan campos en la entrada" });
}
};*/


module.exports = {
    getAuthor,
    createAuthor,
    //updateAuthor
  };