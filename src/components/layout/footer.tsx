import { css } from "@emotion/css";
import { useTranslation } from "react-i18next";

const footerStyles = css`
  background-color: white;
  color: black;
  text-align: center;
  padding: 10px;
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={footerStyles}>
      <p>{t("footer text")}.</p>
    </footer>
  );
};

export default Footer;
