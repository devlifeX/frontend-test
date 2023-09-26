// ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import routes from "../pages/routes";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user.email) {
    return <Navigate to={routes.LOGIN} replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
