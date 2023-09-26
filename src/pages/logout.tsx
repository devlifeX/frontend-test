import React, { Fragment, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";

const LogoutPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, []);

  return (
    <Layout>
      <Fragment />
    </Layout>
  );
};

export default LogoutPage;
