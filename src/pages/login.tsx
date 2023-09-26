import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/form";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>LoginPage</h1>
      <Form
        onSubmit={(data) => {
          login(data);
          navigate("/dashboard");
        }}
      />
    </div>
  );
};

export default LoginPage;
