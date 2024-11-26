const chalk = require("chalk");
const express = require("express");
const {
  UserController,
  userInfoController,
} = require("./Controller/UserController");
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.get("/home", UserController);
app.post("/user", userInfoController);
app.listen(port, () => {
  console.log(chalk.bgYellow.white(`Server is running at port number ${port}`));
});
