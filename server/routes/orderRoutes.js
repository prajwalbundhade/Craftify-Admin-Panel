const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Post');  // Ensure Post model is correctly imported

const router = express.Router();  // Declare the router here

router.post('/update', async (req, res) => {
    const { movedPostId, targetPostId, newPosition } = req.body;
  
    console.log("Received Data:", movedPostId, targetPostId, newPosition);  // Debugging request data
  
    try {
      // Log the ObjectId conversion for debugging
      console.log("Converted movedPostId:", new mongoose.Types.ObjectId(movedPostId));
      console.log("Converted targetPostId:", new mongoose.Types.ObjectId(targetPostId));
  
      const movedPost = await Post.findById(new mongoose.Types.ObjectId(movedPostId));
      const targetPost = await Post.findById(new mongoose.Types.ObjectId(targetPostId));
  
      console.log("Moved Post:", movedPost);  // Log moved post data
      console.log("Target Post:", targetPost); // Log target post data
  
      if (!movedPost || !targetPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      // Proceed with your update logic...
      movedPost.order = newPosition;
      await movedPost.save();
  
      res.status(200).json({ message: 'Order updated successfully' });
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

// Export the router so it can be used in server.js or app.js
module.exports = router;
