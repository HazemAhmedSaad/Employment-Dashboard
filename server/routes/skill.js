const router = require("express").Router();
//const { authRole, authLogin } = require("../middleware/Auth");

const {
  createSkills,
  getSkills,
  getSkill,
  deleteSkill,
} = require("../controllers/skillcontorller");

router.get("/", getSkills);

router.get("/:user_id", getSkill);

router.post("/", createSkills);

router.delete("/:skill_id", deleteSkill);

module.exports = router;
