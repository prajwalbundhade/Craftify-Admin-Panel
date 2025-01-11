import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { AuthToken } from '../../Api/Api';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditPost() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    state: '',
    imagePath: '',
    description: '',
    buyNow: '',
    ytLink: '',
    price: '',
    bookNow: '',
  });

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  const fetchPost = async (postId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/posts/${postId}`);
      setFormData(response.data);
    } catch (error) {
      Swal.fire('Error', 'Failed to load post data', 'error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/posts/${id}`, formData, {
      headers: { Authorization: 'Bearer ' + AuthToken() },
    })
    .then((response) => {
      Swal.fire('Success', 'Post updated successfully', 'success');
    })
    .catch((error) => {
      Swal.fire('Error', 'Failed to update post', 'error');
    });
  };

  return (
    <div className="shadow-md flex-row px-1 mt-5 items-center pt-2 pb-2 mb-2 justify-center rounded-lg ml-10 bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full p-1">
        {/* Same form fields as AddPost with pre-filled data */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>

        {/* Other fields go here... */}

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
