import React, { useState } from "react";
import Input from "../components/input/input";
import Button from "../components/button/button";
import Form from "../components/form/form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Layout from "../components/layout/layout";
import routes from "./routes";
import { useTheme } from "../context/theme/themeContext";

interface FormData {
  phoneNumber: string;
  email: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
    navigate(routes.DASHBOARD);
  };
const { theme } = useTheme();
  return (
    <Layout>
      <h1>Login Page</h1>
      <Form handleSubmit={handleSubmit}>
        <Input
          type="text"
          value={formData.phoneNumber}
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={formData.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Button label="Submit" onClick={() => {}} theme={theme}></Button>
      </Form>
    </Layout>
  );
};

export default LoginPage;
