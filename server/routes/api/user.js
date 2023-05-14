import express from "express";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import config from "../../config/index";
const { JWT_SECRET } = config;

import User from "../../models/user";

const router = express.Router();

//get users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No Users");
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.msg });
  }
});

//register user
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please fill out the required fields" });
  }

  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ msg: "Already Registered" });
  const newUser = await User.create({
    name,
    email,
    password,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        jwt.sign(
          { id: user.id },
          JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
              },
            });
          }
        );
      });
    });
  });
});

export default router;
