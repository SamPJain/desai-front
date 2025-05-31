import React from "react";
import { useNavigate } from "react-router-dom";
import EditProjects from "./EditProjects";

function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    
    <div className="p-8 max-w-3xl mx-auto mt-16">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <EditProjects />
    </div>
  );
}

export default Admin;