import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DraggablePost = React.memo(
  ({ post, index, handleDelete, handleEdit, handleToggleActive }) => {
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
            className="text-center border-b"
          >
            <td className="py-2 text-center">{post.order}</td>
            <td className="py-2">
              <img
                className="w-20 mx-auto"
                src={thumbnailImage}
                alt={post.title}
              />
            </td>
            <td className="py-2 truncate">{post.title}</td>
            <td className="py-2">{post.category}</td>
            <td className="py-2">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                post.isActive 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {post.isActive ? 'Active' : 'Inactive'}
              </span>
            </td>
            <td className="py-2 flex justify-around">
              <FontAwesomeIcon
                className={`cursor-pointer text-lg ${
                  post.isActive ? 'text-green-500' : 'text-gray-400'
                }`}
                icon={post.isActive ? faToggleOn : faToggleOff}
                onClick={() => handleToggleActive(post._id, post.isActive)}
                title={post.isActive ? 'Deactivate' : 'Activate'}
              />
              <FontAwesomeIcon
                className="text-red-500 cursor-pointer"
                icon={faTrash}
                onClick={() => handleDelete(post._id)}
              />
              <Link to={`/Admin/Post/Edit/${post._id}`}>
                <FontAwesomeIcon
                  className="text-yellow-500"
                  icon={faPen}
                  onClick={() => handleEdit(post)}
                />
              </Link>
            </td>
          </tr>
        )}
      </Draggable>
    );
  }
);

export default DraggablePost;
