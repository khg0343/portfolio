import mongoose from "mongoose";
import moment from "moment";

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD"),
  },
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "page",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
