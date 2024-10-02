const {
  signup,
  login,
  getUserDetails,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/getUserDetails", getUserDetails);

module.exports = router;
