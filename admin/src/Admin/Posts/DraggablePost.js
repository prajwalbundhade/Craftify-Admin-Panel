import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DraggablePost = React.memo(
  ({ post, index, handleDelete, handleEdit, handleToggleActive, handleToggleNewMod }) => {
    // Get the first image URL from mediaContent, or use a fallback image
    const thumbnailImage =
      post.mediaContent && post.mediaContent.length > 0
        ? post.mediaContent[0].imageUrl
        : post.imagePath && post.imagePath.length > 0 // Fallback for old data format
        ? post.imagePath[0]
        : "https://via.placeholder.com/150*200"; // Fallback image if no image is available

    return (
      <Draggable key={post._id} draggableId={post._id} index={index}>
        {(provided) => (
          <tr
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="hover:bg-gray-700 transition-colors duration-150"
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
              <div className="flex items-center">
                <span className="bg-gray-600 text-gray-200 px-2 py-1 rounded-full text-xs font-semibold">
                  #{post.order}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <img
                className="w-16 h-12 object-cover rounded-lg shadow-sm"
                src={thumbnailImage}
                alt={post.title}
              />
            </td>
            <td className="px-6 py-4 text-sm text-gray-100 max-w-xs">
              <div className="truncate font-medium" title={post.title}>
                {post.title}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                post.isActive 
                  ? 'bg-green-900 text-green-200 border border-green-700' 
                  : 'bg-red-900 text-red-200 border border-red-700'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  post.isActive ? 'bg-green-400' : 'bg-red-400'
                }`}></div>
                {post.isActive ? 'Active' : 'Inactive'}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                post.newModBanner 
                  ? 'bg-yellow-900 text-yellow-200 border border-yellow-700' 
                  : 'bg-gray-600 text-gray-300 border border-gray-500'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  post.newModBanner ? 'bg-yellow-400' : 'bg-gray-400'
                }`}></div>
                {post.newModBanner ? 'NEW MOD' : 'Normal'}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div className="flex items-center space-x-3">
                <button
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    post.isActive 
                      ? 'text-green-400 hover:bg-green-900 hover:text-green-300' 
                      : 'text-gray-500 hover:bg-gray-700 hover:text-gray-300'
                  }`}
                  onClick={() => handleToggleActive(post._id, post.isActive)}
                  title={post.isActive ? 'Deactivate' : 'Activate'}
                >
                  <FontAwesomeIcon icon={post.isActive ? faToggleOn : faToggleOff} className="text-lg" />
                </button>
                <button
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    post.newModBanner 
                      ? 'text-yellow-400 hover:bg-yellow-900 hover:text-yellow-300' 
                      : 'text-gray-500 hover:bg-gray-700 hover:text-gray-300'
                  }`}
                  onClick={() => handleToggleNewMod(post._id, post.newModBanner)}
                  title={post.newModBanner ? 'Remove NEW MOD Banner' : 'Add NEW MOD Banner'}
                >
                  <FontAwesomeIcon icon={post.newModBanner ? faToggleOn : faToggleOff} className="text-lg" />
                </button>
                <button
                  className="p-2 text-red-400 hover:bg-red-900 hover:text-red-300 rounded-lg transition-colors duration-200"
                  onClick={() => handleDelete(post._id)}
                  title="Delete Post"
                >
                  <FontAwesomeIcon icon={faTrash} className="text-lg" />
                </button>
                <Link to={`/Admin/Post/Edit/${post._id}`}>
                  <button
                    className="p-2 text-blue-400 hover:bg-blue-900 hover:text-blue-300 rounded-lg transition-colors duration-200"
                    onClick={() => handleEdit(post)}
                    title="Edit Post"
                  >
                    <FontAwesomeIcon icon={faPen} className="text-lg" />
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        )}
      </Draggable>
    );
  }
);

export default DraggablePost;
