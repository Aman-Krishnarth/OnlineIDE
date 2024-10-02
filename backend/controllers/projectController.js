const ProjectModel = require("../models/projectModel.js");
const UserModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

const createProject = async (req, res) => {
  const { token, title } = req.body;

  const data = jwt.verify(token, process.env.JWT_SECRET);
  const { id } = data;

  const user = await UserModel.findOne({ _id: id });

  if (!user) {
    return res.json({
      success: false,
      message: "User does not exist",
    });
  }

  let project = await ProjectModel.create({
    title,
    createdBy: user._id,
  });
  return res.json({
    success: true,
    message: "Project created successfully",
    projectId: project._id
  });
};

module.exports = { createProject };
