const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Create a new post
router.post("/new", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: "Error creating post", error: error.message });
  }
});

module.exports = router;
