import AdminLayout from "../../layouts/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../layouts/Loading";
import Swal from "sweetalert2";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggablePost from './DraggablePost'; // Import the new memoized component

function PostsData({ postsData, currentPage, itemsPerPage, handleDelete, handleEdit, handleToggleActive, handleToggleNewMod, onDragEnd }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const postsToDisplay = postsData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-100">Posts Management</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="posts" direction="vertical">
              {(provided) => (
                <table className="min-w-full bg-gray-800" ref={provided.innerRef} {...provided.droppableProps}>
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider w-20">Order</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider w-32">Picture</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider min-w-64">Title</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider w-40">Category</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider w-32">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider w-32">NEW MOD</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider w-40">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {postsToDisplay.map((post, index) => (
                      <DraggablePost
                        key={post._id}
                        post={post}
                        index={index}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleToggleActive={handleToggleActive}
                        handleToggleNewMod={handleToggleNewMod}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 300;
  const [postsData, setPostsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);
  
  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://craftifyproductions.com/api/posts/admin/all"); // Updated URL to fetch all posts for admin
      setPostsData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://craftifyproductions.com/api/posts/${postId}`);
      Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
      fetchPosts();  // Refresh the list of posts after successful deletion
    } catch (error) {
      Swal.fire('Error!', 'There was a problem deleting the post.', 'error');
      console.error('Error deleting post:', error);
    }
  };
  
  const handleToggleActive = async (postId, currentStatus) => {
    try {
      await axios.put(`https://craftifyproductions.com/api/posts/${postId}`, {
        isActive: !currentStatus
      });
      // Swal.fire('Updated23!', 'Post status has been updated.', 'success');
      fetchPosts();  // Refresh the list of posts after successful update
    } catch (error) {
      Swal.fire('Error!', 'There was a problem updating the post status.', 'error');
      console.error('Error updating post status:', error);
    }
  };

  const handleToggleNewMod = async (postId, currentStatus) => {
    try {
      await axios.put(`https://craftifyproductions.com/api/posts/${postId}`, {
        newModBanner: !currentStatus
      });
      // Swal.fire('Updated!', 'NEW MOD banner status has been updated.', 'success');
      fetchPosts();  // Refresh the list of posts after successful update
    } catch (error) {
      Swal.fire('Error!', 'There was a problem updating the NEW MOD banner status.', 'error');
      console.error('Error updating NEW MOD banner status:', error);
    }
  };

  const handleEdit = (post) => {
    console.log("Editing Post:", post);
    return (
      <Link to={`/Admin/Post/Edit/${post._id}`} className="edit-link">Edit</Link>
    );
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
 // Define onDragEnd function
 const onDragEnd = async (result) => {
  const { destination, source } = result;
  if (!destination) return;  // If there's no destination, do nothing.

  // Create a new array to avoid direct mutation
  const reorderedPosts = Array.from(postsData); // Avoid direct mutation

  const [movedPost] = reorderedPosts.splice(source.index, 1);  // Remove the dragged post
  reorderedPosts.splice(destination.index, 0, movedPost);  // Insert it at the new position

  // Update the order in the database via API
  try {
    await axios.post("https://craftifyproductions.com/api/order/update", {
      draggedPostId: movedPost._id,
      targetPostId: reorderedPosts[destination.index]._id,
      newPosition: destination.index,
    });

    // Update local state with the new order
    setPostsData(reorderedPosts);  // Properly update state
  } catch (err) {
    console.error("Error updating order:", err);
  }
};

  const PostsContent = (
    <div className="p-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-between mb-4">
            <Link
              to="/Admin/Post/New"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600"
            >
              <FontAwesomeIcon icon={faPlus} /> New Post
            </Link>
            <div className="flex items-center bg-white border rounded-lg shadow-md px-4 py-2">
              <FontAwesomeIcon icon={faSearch} className="text-indigo-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="outline-none bg-transparent"
              />
              {searchQuery && (
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 ml-2 cursor-pointer"
                />
              )}
            </div>
          </div>
          <PostsData
            postsData={filteredPosts}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleToggleActive={handleToggleActive}
            handleToggleNewMod={handleToggleNewMod}
            onDragEnd={onDragEnd}
          />
          <div className="flex justify-center mt-4">
            {totalPages > 1 && currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="mr-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Previous
              </button>
            )}
            <span>
              Page {currentPage} of {totalPages}
            </span>
            {totalPages > 1 && currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );

  return <AdminLayout Content={PostsContent} />;
}

export default Posts;
