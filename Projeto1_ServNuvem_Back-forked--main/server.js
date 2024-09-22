const express = require("express");
const cors = require("cors");

const app = express();
const port = 5005;

app.use(cors({
  origin: 'https://s5vzl3-5173.csb.app' 


app.get("/", (req, res) => {
  res.send({ message: "Olá do back-end!" }); 
});


app.get("/api", (req, res) => {
  res.json({ message: "Hello from the back-end!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
