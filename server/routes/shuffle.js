

// // routes/shuffle.js
// const express = require('express');
// const router = express.Router();
// const Card = require('../models/Post');

// // Shuffle API
// router.post('/shuffle', async (req, res) => {
//     try {
//       const cards = await Card.find(); // Fetch all cards
  
//       // Fisher-Yates Shuffle (also known as Knuth Shuffle)
//       for (let i = cards.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 5)); // Random index
//         [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap the elements
//       }
  
//       // Send shuffled cards back
//       res.status(200).json({ message: 'Cards shuffled successfully!' });
//       console.log('Shuffle successful!');
//     } catch (error) {
//       console.error('Error shuffling cards:', error);
//       res.status(500).json({ message: 'Error shuffling cards', error });
//     }
//   });
  

// module.exports = router;

// routes/shuffle.js
const express = require('express');
const router = express.Router();
const Card = require('../models/Post');

// POST route for shuffling
router.post('/shuffle', async (req, res) => {
  try {
    const cards = await Card.find();  // Fetch all cards
    const shuffledCards = cards.sort(() => Math.random() - 0.5);  // Shuffle in memory

    // Reorder cards in the database using _id
    for (let i = 0; i < shuffledCards.length; i++) {
      const card = shuffledCards[i];
      await Card.findByIdAndUpdate(card._id, { $set: { order: i } });  // Update order (new field 'order')
    }

    res.status(200).json({ message: 'Cards shuffled and reordered successfully!' });
    console.log('Shuffle successful!');
  } catch (error) {
    console.error('Error shuffling cards:', error);
    res.status(500).json({ message: 'Error shuffling cards', error });
  }
});

// GET route for shuffled cards
router.get('/shuffle', async (req, res) => {
  try {
    const cards = await Card.find().sort('order');  // Fetch and sort by 'order'
    res.status(200).json(cards);  // Send shuffled cards
    console.log('Cards fetched and shuffled!');
  } catch (error) {
    console.error('Error fetching shuffled cards:', error);
    res.status(500).json({ message: 'Error fetching shuffled cards', error });
  }
});

module.exports = router;
