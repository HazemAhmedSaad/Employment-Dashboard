const router = require("express").Router();
const connection = require("../db/connection")();
const { loginAuth } = require("../controllers/loginController");

router.post("/", loginAuth);

module.exports = router;
