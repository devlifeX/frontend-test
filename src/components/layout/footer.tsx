import { css } from "@emotion/css";
import { useTranslation } from "react-i18next";
import useStyles from "../../utility/createUseStyles";

const footerStyles = css`
  text-align: center;
  padding: 10px;
`;

interface FooterProps {
  theme?: object;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const { t } = useTranslation();
  const classes = useStyles({ theme });

  return (
    <div className={classes.footer}>
      <footer className={footerStyles}>
        <p>{t("footer text")}.</p>
      </footer>
    </div>
  );
};

export default Footer;
