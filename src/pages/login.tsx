import React, { useState } from "react";
import Input from "../components/input/input";
import Button from "../components/button/button";
import Form from "../components/form/form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

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
    navigate("/dashboard");
  };

  return (
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
      <Button label="Submit" onClick={() => {}}></Button>
    </Form>
  );
};

export default LoginPage;
