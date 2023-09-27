import React from "react";
import Layout from "../components/layout/layout";
import { useTranslation } from "react-i18next";

const AboutUsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1>{t("about us")}</h1>
      <h2>{t("Welcome to React")}</h2>
      <p>{t("about us text")}</p>
    </Layout>
  );
};

export default AboutUsPage;
