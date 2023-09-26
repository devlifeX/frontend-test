// ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user.username) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
