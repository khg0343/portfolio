import jwt from "jsonwebtoken";
import config from "../config/index";
const { JWT_SECRET } = config;

const Auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No authorization token was found" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: "Unvalid Token" });
  }
};

export default Auth;
