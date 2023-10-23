const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("telent hut is ready");
});

app.listen(port, () => {
  console.log(`talent hut is sitting on port ${port}`);
});