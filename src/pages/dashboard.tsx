import React from "react";
import { useAuth } from "../context/authContext";

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Hello world!</h1>
      <p>you logged in as {user.email}</p>
    </div>
  );
};

export default DashboardPage;
