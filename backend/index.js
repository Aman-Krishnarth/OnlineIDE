const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDb = require("./db/connectToDb.js");
const app = express();
const userRouter = require("./routes/userRoute.js")

dotenv.config();
connectToDb();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.use("/user",userRouter)

app.listen(8080, () => {
  console.log("server running");
});
