import mongoose from "mongoose";
import moment from "moment";

const PageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  iconUrl: {
    type: String,
    default: "",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tag",
    },
  ],
  lastEditDate: {
    type: String,
    default: moment().format("YYYY-MM-DD"),
  },
  content: {
    type: String,
    required: true,
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
