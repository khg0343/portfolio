import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Auth from "../../middleware/auth";
import config from "../../config/index";
const { JWT_SECRET } = config;
import User from "../../models/user";

const router = express.Router();

//get user
router.get("/user", Auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw Error("User Not Found");
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.msg });
  }
});

//login
router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "please fill out the required fields" });
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Not registered yet" });
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Incorrect Password" });
      jwt.sign(
        { id: user.id },
        JWT_SECRET,
        { expiresIn: "2 days" },
        (err, token) => {
          if (err) throw err;
          res.json({
            msg: "Login Successful",
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
          });
        }
      );
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.msg });
  }
});

//logout
router.post("/logout", (req, res) => {
  res.json("Logout Successful");
});

export default router;
