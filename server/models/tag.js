import mongoose from "mongoose";

// Create Schema
const TagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    default: "",
  },
  pages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "page",
    },
  ],
});

const Tag = mongoose.model("tag", TagSchema);

export default Tag;
