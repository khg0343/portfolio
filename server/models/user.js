import mongoose from "mongoose";
import moment from "moment";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  register_date: {
    type: Date,
    default: moment().format("YYYY-MM-DD"),
  },
  comments: [
    {
      page_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "page",
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    },
  ],
  pages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "page",
    },
  ],
});

const User = mongoose.model("user", UserSchema);

export default User;
