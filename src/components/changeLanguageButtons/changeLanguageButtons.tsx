import Button from "../button/button";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/css";

const languageButtonsWrapperStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-decoration: none;
  color: inherit;
  button {
    margin: 10px;
  }
`;

const ChangeLanguageButtons: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className={languageButtonsWrapperStyles}>
      <Button label="fa" onClick={() => i18n.changeLanguage("fa")} />
      <Button label="fr" onClick={() => i18n.changeLanguage("fr")} />
      <Button label="en" onClick={() => i18n.changeLanguage("en")} />
    </div>
  );
};

export default ChangeLanguageButtons;
