const express = require("express");

const app = express();
const PORT = process.env.PORT ?? 3001;

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Thank you for your interest, ${req.body.name}`);
});

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});
