const { createProject } = require("../controllers/projectController");

const router = require("express").Router();

router.post("/createProject",createProject)

module.exports = router;