const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Para permitir requisições do front-end

// Rota que envia dados para o front-end
app.get("/api", (req, res) => {
  res.json({ message: "Olá do Back-End!" });
});

// Servidor rodando na porta 25000
const PORT = 25000;
app.listen(PORT, () => {
  console.log(`Servidor back-end rodando na porta ${PORT}`);
});
