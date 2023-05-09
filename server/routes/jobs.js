const router = require("express").Router();
//const { authRole, authLogin } = require("../middleware/Auth");
const requests = require("../routes/request");
const {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobscontroller");

router.use("/requests", requests);

router.get("/", getJobs);

// CREATE JOB
router.post("/", createJob);

//GET SPECIFIC JOB
router.get("/:job_id", getJob);

//UPDATE JOB
router.put("/:id", updateJob);

// DELETE JOB
router.delete("/:id", deleteJob);

module.exports = router;
