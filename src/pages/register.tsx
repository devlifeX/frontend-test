import React, { useState } from "react";
import Input from "../components/input/input";
import Button from "../components/button/button";
import Form from "../components/form/form";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import routes from "./routes";
import { useTheme } from "../context/theme/themeContext";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/css";

interface FormData {
  email: string;
  phoneNumber: string;
  password: string;
}

const formStyles = css`
  button {
    width: 100%;
  }
`;

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { register } = useAuth();
  const { theme } = useTheme();
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
    navigate(routes.LOGIN);
  };

  return (
    <Layout>
      <h1>{t("Register Page")}</h1>
      <div className={formStyles}>
        <Form handleSubmit={handleSubmit}>
          <Input
            type="text"
            value={formData.email}
            name="email"
            placeholder={t("Email")}
            onChange={handleChange}
            theme={theme}
          />
          <Input
            type="text"
            value={formData.phoneNumber}
            name="phoneNumber"
            placeholder={t("Phone Number")}
            onChange={handleChange}
            theme={theme}
          />
          <Input
            type="text"
            value={formData.password}
            name="password"
            placeholder={t("Password")}
            onChange={handleChange}
            theme={theme}
          />
          <Button
            label={t("Submit")}
            onClick={() => register(formData)}
            theme={theme}
          />
        </Form>
      </div>
    </Layout>
  );
};

export default RegisterPage;
