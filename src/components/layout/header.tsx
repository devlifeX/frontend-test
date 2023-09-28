import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useTranslation } from "react-i18next";
import routes from "../../pages/routes";
import { css } from "@emotion/css";
import ChangeThemeButtons from "../changeThemeButtons/changeThemeButtons";
import ChangeLanguageButtons from "../changeLanguageButtons/changeLanguageButtons";
import useStyles from "../../utility/createUseStyles";

const headerMenuStyles = css`
  padding: 20px;
`;

const linkStyles = css`
  text-decoration: none;
  color: inherit;
  padding: 10px;
  &:hover {
    color: blue;
  }
`;

interface HeaderProps {
  theme?: object;
}

const HeaderMenu: React.FC<HeaderProps> = ({ theme }) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const classes = useStyles({ theme });

  const menuItems = [
    { text: t("login"), to: routes.LOGIN },
    { text: t("register"), to: routes.REGISTER },
    { text: t("dashboard"), to: routes.DASHBOARD },
    { text: t("about us"), to: routes.ABOUTUS },
  ];

  return (
    <Fragment>
      <div className={classes.header}>
        <nav className={headerMenuStyles}>
          {menuItems.map((item) => (
            <NavLink className={linkStyles} to={item.to}>
              {item.text}{" "}
            </NavLink>
          ))}
          {user?.email && (
            <NavLink className={linkStyles} to={routes.LOGOUT}>
              {t("logout")}
            </NavLink>
          )}
        </nav>
      </div>

      <ChangeThemeButtons />

      <ChangeLanguageButtons />
    </Fragment>
  );
};

export default HeaderMenu;
