const {
  createProject,
  getProjects,
  deleteProject,
  getProject,
  updateProject,
} = require("../controllers/projectController");

const router = require("express").Router();

router.post("/createProject", createProject);
router.post("/getProjects", getProjects);
router.post("/deleteProject", deleteProject);
router.post("/getProject", getProject);
router.post("/updateProject", updateProject);

module.exports = router;
