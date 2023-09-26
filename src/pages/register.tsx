import React, { useState } from "react";
import Input from "../components/input/input";
import Button from "../components/button/button";
import Form from "../components/form/form";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";

interface FormData {
  email: string;
  phoneNumber: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phoneNumber: "",
    password: "",
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
    navigate("/login");
  };

  return (
    <Layout>
      <h1>Register Page</h1>
      <Form handleSubmit={handleSubmit}>
        <Input
          type="text"
          value={formData.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={formData.phoneNumber}
          name="phoneNumber"
          placeholder="Phone number"
          onChange={handleChange}
        />
        <Input
          type="text"
          value={formData.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button label="Submit" onClick={() => register(formData)}></Button>
      </Form>
    </Layout>
  );
};

export default RegisterPage;
