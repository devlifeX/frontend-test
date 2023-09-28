import React, { useState } from "react";
import Input from "../components/input/input";
import Button from "../components/button/button";
import Form from "../components/form/form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Layout from "../components/layout/layout";
import routes from "./routes";
import { useTheme } from "../context/theme/themeContext";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/css";

interface FormData {
  phoneNumber: string;
  email: string;
}

const formStyles = css`
  button {
    width: 100%;
  }
`;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
      <h1>{t("Login Page")}</h1>
      <div className={formStyles}>
        <Form handleSubmit={handleSubmit}>
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
            value={formData.email}
            name="email"
            placeholder={t("Email")}
            onChange={handleChange}
            theme={theme}
          />

          <Button label={t("Submit")} onClick={() => {}} theme={theme}></Button>
        </Form>
      </div>
    </Layout>
  );
};

export default LoginPage;
