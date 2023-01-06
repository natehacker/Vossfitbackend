const Router = require("express").Router();
const controller = require("../controllers/signupcontroller")

Router.get("/", controller.getAllSignUps)
  
module.exports = Router