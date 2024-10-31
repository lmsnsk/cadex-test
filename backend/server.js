const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3535;

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

app.post("/api", (req, res) => {
  res.send({ message: `Thank you for your interest, ${req.body.username}` });
});

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});
