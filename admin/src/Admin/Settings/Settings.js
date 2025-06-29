import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import Loading from '../../layouts/Loading';
import Swal from 'sweetalert2';

function Settings() {
  const [settings, setSettings] = useState({
    customButtonEnabled: true,
    customButtonText: "Ordering Custom Mod is now possible because our team is available!"
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await axios.get("https://craftifyproductions.com/api/settings");
      setSettings(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching settings:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await axios.put("https://craftifyproductions.com/api/settings", settings);
      Swal.fire({
        icon: 'success',
        title: 'Settings Updated',
        text: 'Your settings have been saved successfully!',
      });
    } catch (error) {
      console.error("Error updating settings:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update settings. Please try again.',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const SettingsContent = (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Site Settings</h1>
        <p className="text-gray-400">Manage global application settings</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Custom Button Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="customButtonEnabled"
                    checked={settings.customButtonEnabled}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
                  />
                  <span className="text-sm font-medium text-gray-300">Enable Custom Button</span>
                </label>
                <p className="text-gray-400 text-sm mt-1">
                  When enabled, the custom order button will be displayed on the homepage
                </p>
              </div>

              <div>
                <label htmlFor="customButtonText" className="block text-sm font-medium text-gray-300 mb-2">
                  Custom Button Tooltip Text
                </label>
                <textarea
                  id="customButtonText"
                  name="customButtonText"
                  value={settings.customButtonText}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter the tooltip text that appears when hovering over the custom button"
                />
                <p className="text-gray-400 text-sm mt-1">
                  This text will appear as a tooltip when users hover over the custom button
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={fetchSettings}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {saving ? (
              <>
                <Loading className="w-5 h-5 mr-2" />
                Saving...
              </>
            ) : (
              "Save Settings"
            )}
          </button>
        </div>
      </form>
    </div>
  );

  return <AdminLayout Content={SettingsContent} />;
}

export default Settings; 