import React from "react";
import SideBar from "./SideBar";
import Nav from "./Nav";

function AdminLayout({ Content, children }) {
  return (
    <div className="flex h-screen bg-gray-900">
      <SideBar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          {Content || children}
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
