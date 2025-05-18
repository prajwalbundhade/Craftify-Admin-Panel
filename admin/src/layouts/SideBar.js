import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  const links = [
    { to: "/Admin/Posts", icon: faFileAlt, label: "Mods" },
    { to: "/Logout", icon: faSignOutAlt, label: "Logout" },
  ];

  return (
    <nav className="border-r border-gray-700 bg-gray-900 h-screen p-4 w-64 pt-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
      </div>
      {links.map((link) => (
        <Link key={link.to} to={link.to} aria-label={link.label}>
          <div
            className={`flex items-center text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer rounded-md p-3 mb-2 transition-colors duration-200 ${
              location.pathname === link.to ? "bg-gray-800 text-white" : ""
            }`}
          >
            <FontAwesomeIcon icon={link.icon} className="mr-3 text-blue-500" />
            <span className="font-medium">{link.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default SideBar;
