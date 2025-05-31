import React from "react";
import { Navigate } from "react-router-dom";

function RequireAdminAuth({ children }) {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" />;
}

export default RequireAdminAuth;