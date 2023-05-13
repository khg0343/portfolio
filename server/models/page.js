import mongoose from "mongoose";
import moment from "moment";

const PageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  content: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/263/263103.png",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tag",
    },
  ],
  last_edit_date: {
    type: String,
    default: moment().format("YYYY-MM-DD"),
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const Page = mongoose.model("page", PageSchema);

export default Page;
