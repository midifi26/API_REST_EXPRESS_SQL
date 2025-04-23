const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000;

app.use(express.json());

const authorsRoutes= require("./routes/author.routes");
const entriesRoutes = require("./routes/entries.routes");

app.use('/api/authors',authorsRoutes);
app.use('/api/entries',entriesRoutes);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });