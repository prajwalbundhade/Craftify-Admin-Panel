const express = require("express");
const Settings = require("../models/Settings");

const router = express.Router();

// Get settings
router.get("/", async (req, res) => {
  try {
    const settings = await Settings.getSettings();
    res.status(200).json(settings);
  } catch (error) {
    console.error("Error fetching settings:", error);
    res.status(500).json({ message: "Error fetching settings", error: error.message });
  }
});

// Update settings
router.put("/", async (req, res) => {
  try {
    const settings = await Settings.getSettings();
    const updatedSettings = await Settings.findByIdAndUpdate(
      settings._id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedSettings);
  } catch (error) {
    console.error("Error updating settings:", error);
    res.status(500).json({ message: "Error updating settings", error: error.message });
  }
});

module.exports = router; 