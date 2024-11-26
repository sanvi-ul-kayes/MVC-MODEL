const path = require("path");
const info = require("../Model/UserInformation");
function UserController(req, res) {
  res.sendFile(path.join(__dirname, "../View/index.html"));
}
function userInfoController(req, res) {
  info.push(req.body);
  res.send(info);
}

module.exports = { UserController, userInfoController };
