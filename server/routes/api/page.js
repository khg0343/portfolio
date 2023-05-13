import express from "express";

import Page from "../../models/page";

const router = express.Router();

//get pages
router.get("/", async (req, res) => {
  const pages = await Page.find();
  console.log(pages, "Get All Page");
  res.json(pages);
});

//post page
router.post("/", async (req, res, next) => {
  try {
    console.log(req, "req");
    const { title, content } = req.body;
    const newPage = await Page.create({
      title,
      content,
    });
    res.json(newPage);
  } catch (e) {
    console.log(e);
  }
});

export default router;
