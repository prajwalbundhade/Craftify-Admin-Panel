import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../Api/Api";
import Loading from "../../layouts/Loading";
import { X } from 'lucide-react';
import Swal from 'sweetalert2';
import AdminLayout from '../../layouts/AdminLayout';

function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    index: '1',
    title: '',
    category: '',
    state: '',
    mediaContent: [],
    description: '',
    buyNow: '',
    price: '',
    bookNow: '',
    newbuynow: '',
    options: [],
    isActive: true
  });

  const [newMedia, setNewMedia] = useState({
    imageUrl: '',
    ytLink: '',
    isRealVideo: false,
    isRefVideo: false
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await API.get(`/posts/${id}`);
      const postData = response.data;
      
      // Convert old format to new format if necessary
      if (Array.isArray(postData.imagePath)) {
        postData.mediaContent = postData.imagePath.map((imageUrl, index) => ({
          imageUrl,
          ytLink: index === 0 ? postData.ytLink : '',
          isRealVideo: index === 0 && postData.ytLink ? true : false,
          isRefVideo: index > 0 && postData.ytLink ? true : false
        }));
        delete postData.imagePath;
        delete postData.ytLink;
      }

      setFormData(postData);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to fetch post");
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMediaInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'isRealVideo' && checked) {
        setNewMedia({
          ...newMedia,
          isRealVideo: true,
          isRefVideo: false
        });
      } else if (name === 'isRefVideo' && checked) {
        setNewMedia({
          ...newMedia,
          isRealVideo: false,
          isRefVideo: true
        });
      } else {
        setNewMedia({
          ...newMedia,
          [name]: checked
        });
      }
    } else {
      setNewMedia({
        ...newMedia,
        [name]: value
      });
    }
  };

  const handleAddMedia = () => {
    if (newMedia.imageUrl.trim() !== "") {
      setFormData({
        ...formData,
        mediaContent: [...formData.mediaContent, { ...newMedia }]
      });
      setNewMedia({
        imageUrl: '',
        ytLink: '',
        isRealVideo: false,
        isRefVideo: false
      });
    }
  };

  const removeMedia = (index) => {
    const updatedMedia = formData.mediaContent.filter((_, i) => i !== index);
    setFormData({ ...formData, mediaContent: updatedMedia });
  };

  const handleOptionSelect = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption && !formData.options.includes(selectedOption)) {
      setFormData({
        ...formData,
        options: [...formData.options, selectedOption]
      });
    }
  };

  const removeOption = (optionToRemove) => {
    setFormData({
      ...formData,
      options: formData.options.filter(option => option !== optionToRemove)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await API.put(`/posts/${id}`, formData);
      Swal.fire({
        icon: 'success',
        title: 'Post Updated',
        html: `Title: ${formData.title}`,
      });
      navigate("/Admin/Posts");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update post");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Edit Post</h1>
        <p className="text-gray-400">Update your post details</p>
      </div>

      {error && (
        <div className="p-4 bg-red-900/50 border border-red-800 rounded-md">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">Select a category</option>
              {["Trending Mods", "Minecraft But Mods & Plugins","High Quality Maps", "Best Value Mods", "Premium Plugins"].map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-2">
              State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">Select a state</option>
              {["Mod", "Plugin", "Datapack", "Map"].map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="10"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Write your post content here..."
            />
          </div>

          <div>
            <label htmlFor="buyNow" className="block text-sm font-medium text-gray-300 mb-2">
              Buy Now Link
            </label>
            <input
              type="text"
              id="buyNow"
              name="buyNow"
              value={formData.buyNow}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter Buy Now link"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">
              Mod Price ($)
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter mod price"
            />
          </div>

          <div>
            <label htmlFor="bookNow" className="block text-sm font-medium text-gray-300 mb-2">
              Book Now (Write 'ok' to enable button)
            </label>
            <input
              type="text"
              id="bookNow"
              name="bookNow"
              value={formData.bookNow}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter 'ok' to enable button"
            />
          </div>

          <div>
            <label htmlFor="newbuynow" className="block text-sm font-medium text-gray-300 mb-2">
              New Buy Now (Write 'ok' to enable button)
            </label>
            <input
              type="text"
              id="newbuynow"
              name="newbuynow"
              value={formData.newbuynow}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter 'ok' to enable button"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
              />
              <span className="text-sm font-medium text-gray-300">Active (Visible on frontend)</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Media Content</label>
            {formData.mediaContent.length > 0 && (
              <div className="mt-2 space-y-4">
                {formData.mediaContent.map((media, index) => (
                  <div key={index} className="p-4 bg-gray-700 border border-gray-600 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-white">Media Item #{index + 1}</span>
                      <button
                        type="button"
                        onClick={() => removeMedia(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-gray-300">
                      <div>Image URL: {media.imageUrl}</div>
                      <div>YouTube Link: {media.ytLink || 'None'}</div>
                      <div>Video Type: {media.isRealVideo ? 'Real Video' : media.isRefVideo ? 'Reference Video' : 'No Video Type'}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 p-4 bg-gray-700 border border-gray-600 rounded-lg">
              <h3 className="font-medium text-white mb-3">Add New Media</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Image URL</label>
                  <input
                    type="text"
                    name="imageUrl"
                    value={newMedia.imageUrl}
                    onChange={handleMediaInputChange}
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter image URL"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">YouTube Link (Optional)</label>
                  <input
                    type="text"
                    name="ytLink"
                    value={newMedia.ytLink}
                    onChange={handleMediaInputChange}
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter YouTube link"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="isRealVideo"
                      checked={newMedia.isRealVideo}
                      onChange={handleMediaInputChange}
                      className="w-4 h-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
                    />
                    <label className="text-sm text-gray-300">Real Video</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="isRefVideo"
                      checked={newMedia.isRefVideo}
                      onChange={handleMediaInputChange}
                      className="w-4 h-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
                    />
                    <label className="text-sm text-gray-300">Reference Video</label>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleAddMedia}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Add Media Item
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Options</label>
            <select
              onChange={handleOptionSelect}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              value=""
            >
              <option value="">Select an option</option>
              {["Oneblocks", "Tycoons", "Troll videos", "Evolution", "Horror Mods", "Base Mods", "Custom Abilities", "Hearts Mod", "Trending Maps", "Crazy Mods"].map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full"
                >
                  <span>{option}</span>
                  <button
                    type="button"
                    onClick={() => removeOption(option)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/Admin/Posts")}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isLoading ? (
              <>
                <Loading className="w-5 h-5 mr-2" />
                Updating...
              </>
            ) : (
              "Update Post"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function Edit() {
  return <AdminLayout Content={<EditPost />} />;
}

export default Edit;
