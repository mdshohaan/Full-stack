const express = require("express");
const connectDB = require("./db");

const app = express();

app.use(express.json());

app.post("/register", async (req, res, next) => {
  // console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json("Invalid data");
  }
  console.log(name, email, password);
});

app.get("/", (req, res) => {
  const obj = {
    name: "Ayman",
    email: "ayman@example.com",
  };
  res.json(obj);
});

app.listen(4000, () => {
  console.log("I'm listening on port 4000");
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("Database Connected");
    app.listen(4000, () => {
      console.log("I'm listening on port 4000");
    });
  })
  .catch((e) => console.log(e));
