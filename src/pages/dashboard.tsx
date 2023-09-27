import React from "react";
import { useAuth } from "../context/authContext";
import Layout from "../components/layout/layout";
import { useTranslation } from "react-i18next";

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <Layout>
      <h1>{t("Hello world")}</h1>
      <p>
        {t("you logged in as")} {user.email}
      </p>
    </Layout>
  );
};

export default DashboardPage;
