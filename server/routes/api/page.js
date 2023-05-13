import express from "express";

import Page from "../../models/page";

const router = express.Router();

//get pages
router.get("/", async (req, res) => {
  try {
    const pages = await Page.find();
    console.log(pages, "Get All Page");
    res.status(200).json(pages);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.msg });
  }
});

//post page
router.post("/", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const newPage = await Page.create({
      title,
      content,
    });
    res.status(200).json(newPage);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.msg });
  }
});

export default router;
