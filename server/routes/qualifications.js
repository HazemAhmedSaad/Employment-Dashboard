const router = require("express").Router();
//const { authRole, authLogin } = require("../middleware/Auth");
const {
  getQualifications,
  createQualification,
  getQualification,
  updateQualification,
  deleteQualification,
} = require("../controllers/qualificationController");

router.get("/", getQualifications);

// CREATE QUALIFICATION
router.post("/", createQualification);

//GET SPECIFIC QUALIFICATION
router.get("/:id", getQualification);

//UPDATE QUALIFICATION
router.put("/:id", updateQualification);

// DELETE QUALIFICATION
router.delete("/:id", deleteQualification);

module.exports = router;
