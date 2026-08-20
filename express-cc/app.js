const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const morgan = require("morgan");
const PollController = require("./PollController");

const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/create", PollController.createPollController);
app.post("/create", PollController.createPollPostController);

app.get("/polls/:id", PollController.viewPollGetController);
app.post("/polls/:id", PollController.viewPollPostController);
app.get("/polls", PollController.getAllPolls);

mongoose
  .connect(
    "mongodb+srv://irfanulislamdu:NSzBhGeIvIrkkTht@cluster0.h2lah.mongodb.net/express-cc",
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Application is ready");
    });
  })
  .catch((e) => {
    console.log(e);
  });
