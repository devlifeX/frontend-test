import Button from "../button/button";
import { useTheme } from "../../context/theme/themeContext";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/css";

const themeButtonsWrapperStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-decoration: none;
  color: inherit;
  button {
    margin: 10px;
  }
`;

const ChangeThemeButtons: React.FC = () => {
  const { onChangeTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={themeButtonsWrapperStyles}>
      <Button
        label={t("firstTheme")}
        onClick={() => onChangeTheme("firstTheme")}
      />
      <Button
        label={t("secondTheme")}
        onClick={() => onChangeTheme("secondTheme")}
      />
      <Button
        label={t("thirdTheme")}
        onClick={() => onChangeTheme("thirdTheme")}
      />
      <Button
        label={t("fourthTheme")}
        onClick={() => onChangeTheme("fourthTheme")}
      />
    </div>
  );
};

export default ChangeThemeButtons;
