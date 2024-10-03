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
    projectId: project._id,
  });
};

const getProjects = async (req, res) => {
  const { token } = req.body;

  let data = jwt.verify(token, process.env.JWT_SECRET);
  const { id } = data;

  let user = await UserModel.findOne({ _id: id });

  if (user) {
    let projects = await ProjectModel.find({ createdBy: id });
    res.json({
      success: true,
      message: "Projects fetched successfully",
      projects,
    });
  }

  res.json({
    success: false,
    message: "Something went wrong",
  });
};

const getProject = async (req, res) => {
  const { token, projectId } = req.body;

  const data = jwt.verify(token, process.env.JWT_SECRET);
  const { id } = data;

  const user = await UserModel.findOne({ _id: id });

  if (user) {
    const project = await ProjectModel.findOne({ _id: projectId });

    return res.json({
      success: true,
      message: "Project fetched successfully",
      project,
    });
  }

  res.json({
    success: false,
    message: "Something went wrong",
  });
};

const deleteProject = async (req, res) => {
  const { token, projectId } = req.body;

  const data = jwt.verify(token, process.env.JWT_SECRET);

  const { id } = data;

  const user = await UserModel.findOne({ _id: id });

  if (user) {
    await ProjectModel.findOneAndDelete({ _id: projectId });

    res.json({
      success: true,
      message: "Project Deleted successfully",
    });
  }

  res.json({
    success: false,
    message: "Something went wrong",
  });
};

const updateProject = async (req, res) => {
  const { token, htmlCode, cssCode, jsCode, projectId } = req.body;

  let data = jwt.verify(token, process.env.JWT_SECRET);
  const { id } = data;

  let user = await UserModel.findOne({ _id: id });

  if (user) {
    let project = await ProjectModel.findOneAndUpdate(
      { _id: projectId },
      { htmlCode, cssCode, jsCode },
      { new: true }
    );

    return res.json({
      success: true,
      message: "Project Updated Successfully",
    });
  }

  res.json({
    success: false,
    message: "Something went wrong",
  });
};

module.exports = {
  createProject,
  getProjects,
  deleteProject,
  getProject,
  updateProject,
};
