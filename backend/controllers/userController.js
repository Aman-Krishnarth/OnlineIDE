const UserModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { username, name, password, email } = req.body;

  const isUser = await UserModel.findOne({ email });

  if (isUser) {
    return res.json({
      success: false,
      message: "User already exists",
    });
  }

  bcrypt.hash(password, 10, async (err, hashedPassword) => {
    const user = await UserModel.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: "User created successfully",
      token,
    });
  });
};

const login = async (req, res) => {
  console.log("login mein hu");
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  console.log(user);

  if (!user) {
    console.log("user nai hai");
    return res.json({
      success: false,
      message: "User does not exist",
    });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      return res.json({
        success: true,
        message: "User logged in successfully",
        token,
      });
    } else {
      return res.json({
        success: false,
        message: "Email or Password is wrong",
      });
    }
  });
};

const getUserDetails = async (req, res) => {
  console.log("in get user details");
  let { token } = req.body;
  console.log(token);
  console.log(process.env.JWT_SECRET);
  // let data = jwt.verify(token, process.env.JWT_SECRET);
  let data = jwt.verify(token, process.env.JWT_SECRET);
  console.log(data);

  let id = data.id;

  let user = await UserModel.findOne({ _id: id });

  if (!user) {
    return res.json({
      success: false,
      message: "User not found",
    });
  } else {
    res.json({
      success: true,
      message: "User details fetched successfully",
      user,
    });
  }
};

module.exports = { signup, login, getUserDetails };
