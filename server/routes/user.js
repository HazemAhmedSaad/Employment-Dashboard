const router = require("express").Router();
//const { authRole, authLogin } = require("../middleware/Auth");

const {
  getApplicants,
  addNewUser,
  updateUser,
  deleteUser,
  getApplicant,
} = require("../controllers/userController");

router.get("/", getApplicants);

router.get("/:user_id", getApplicant);

//* fucntion add new applicant to DB
router.post("/", addNewUser);

//* change(update) status of applicant in DB
router.put("/:user_id", updateUser);

//* delete the row of employ id from DB
router.delete("/:user_id", deleteUser);

module.exports = router;
