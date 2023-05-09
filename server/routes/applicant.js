const router = require("express").Router();
const request = require("../routes/request");
const jobs = require("../routes/jobs");
const skill = require("../routes/skill");
const user = require("../routes/user");

router.use("/user", user);

router.use("/request", request);

router.use("/jobs", jobs);

router.use("/skills", skill);

module.exports = router;
