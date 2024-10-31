const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3535;

app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

app.post("/api", function (req, res) {
  res.send({ message: `Thank you for your interest, ${req.body.username}` });
});

app.listen(PORT, function () {
  console.log("Server started on http://localhost:" + PORT);
});

