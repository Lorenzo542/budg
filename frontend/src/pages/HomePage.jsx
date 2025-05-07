import React from "react";
import { useAuthStore } from "../store/AuthContext.js";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { authUser, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <h1 className="text-3xl font-bold mb-4">Welcome back, {authUser?.username} 👋</h1>
      <p className="text-lg text-gray-600 mb-8">
        You're logged in and ready to manage your budget.
      </p>
      <button onClick={handleLogout} className="btn btn-outline btn-error">
        Logout
      </button>
    </div>
  );
};

export default HomePage;
