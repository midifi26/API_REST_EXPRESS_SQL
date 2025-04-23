const express = require('express');
const authorController = require("../controllers/author.controller");
const router = express.Router();

router.get('/', authorController.getAuthor);
router.post('/', authorController.createAuthor);
//router.put('/', authorController.updateAuthor);
//router.delete('/', entriesController.deleteEntry);


module.exports = router;