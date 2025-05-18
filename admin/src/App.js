import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Posts from "./Admin/Posts/Posts";
import Add from "./Admin/Posts/NewPost";
import EditPost from "./Admin/Posts/EditPost";
import { AuthToken } from "./Api/Api";

// Higher-order component for private routes
function PrivateRoute({ children }) {
  const token = AuthToken(); // Retrieve auth token from session
  return token ? children : <Navigate to="/Login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Navigate to="/Login" />} />

        {/* Protected Routes */}
        <Route
          path="/Admin/Posts"
          element={
            <PrivateRoute>
              <Posts />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin/Post/New"
          element={
            <PrivateRoute>
              <Add />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin/Post/Edit/:id"
          element={
            <PrivateRoute>
              <EditPost />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
