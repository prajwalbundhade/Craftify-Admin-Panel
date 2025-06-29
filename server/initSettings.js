const mongoose = require("mongoose");
const Settings = require("./models/Settings");
require("dotenv").config();

async function initSettings() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Check if settings already exist
    const existingSettings = await Settings.findOne();
    
    if (!existingSettings) {
      // Create default settings
      const defaultSettings = new Settings({
        customButtonEnabled: true,
        customButtonText: "Ordering Custom Mod is now possible because our team is available!"
      });
      
      await defaultSettings.save();
      console.log("Default settings created successfully!");
    } else {
      console.log("Settings already exist in the database");
    }

    // Display current settings
    const settings = await Settings.getSettings();
    console.log("Current settings:", settings);

  } catch (error) {
    console.error("Error initializing settings:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run the initialization
initSettings(); 