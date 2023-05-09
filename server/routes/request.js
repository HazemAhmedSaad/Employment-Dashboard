const router = require("express").Router();
// //const { authRole, authLogin } = require("../middleware/Auth");

const {
  getRequests,
  getRequest,
  sendRequest,
  respondToRequest,
  deleteRequest,
} = require("../controllers/requestController");

//GET REQUESTS
router.get("/", getRequests);

//GET REQUEST
router.get("/:user_id", getRequest);

//CREATE REQUEST
router.post("/", sendRequest);

//RESPOND TO A REQUEST
router.put("/:user_id&:job_id", respondToRequest);

//DELETE REQUEST
router.delete("/:user_id&:job_id", deleteRequest);

module.exports = router;
