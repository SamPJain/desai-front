import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const APP_URL = process.env.REACT_APP_BASE_URL;
    e.preventDefault();
    if (userId !== "admin") {
      alert("Username must be speical");
      return;
    }
    try {
      const res = await fetch(APP_URL + "/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.token || "temp-token");
        navigate("/admin");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-8 max-w-md mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="block mb-2 p-2 border w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block mb-4 p-2 border w-full"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}

export default AdminLogin;