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

export default router;
