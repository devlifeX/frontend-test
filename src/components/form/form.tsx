import React, { useState } from "react";
import { css } from "@emotion/css";
import Input from "../input/input";

const formStyles = css`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const buttonStyles = css`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  username: string;
  password: string;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
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
    onSubmit(formData);
  };

  return (
    <form className={formStyles} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={formData.username}
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <Input
        type="password"
        value={formData.password}
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit" className={buttonStyles}>
        Submit
      </button>
    </form>
  );
};

export default Form;
