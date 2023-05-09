const router = require("express").Router();
const { logOut } = require("../controllers/logoutController");

router.post("/", logOut);

module.exports = router;
