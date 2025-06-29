const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema(
  {
    customButtonEnabled: {
      type: Boolean,
      default: true,  // Default to true so the button is visible by default
    },
    customButtonText: {
      type: String,
      default: "Ordering Custom Mod is now possible because our team is available!",
    },
    // Add more settings here as needed
  },
  {
    timestamps: true,
  }
);

// Ensure only one settings document exists
SettingsSchema.statics.getSettings = async function() {
  let settings = await this.findOne();
  if (!settings) {
    settings = new this();
    await settings.save();
  }
  return settings;
};

module.exports = mongoose.model("Settings", SettingsSchema); 