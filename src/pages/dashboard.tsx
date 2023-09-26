import React from "react";
import { useAuth } from "../context/authContext";
import Layout from "../components/layout/layout";

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <h1>Hello world!</h1>
      <p>you logged in as {user.email}</p>
    </Layout>
  );
};

export default DashboardPage;
