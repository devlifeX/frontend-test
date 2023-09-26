import React, { Fragment } from "react";
import { css } from "@emotion/css"; // Import css from Emotion
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import routes from "../../pages/routes";
import { useTheme } from "../../context/theme/themeContext";
import Button from "../button/button";

const headerMenuStyles = css`
  background-color: white;
  color: black;
  padding: 20px;
`;

const footerStyles = css`
  background-color: white;
  color: black;
  text-align: center;
  padding: 10px;
`;

const layoutStyles = css`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  main {
    padding: 20px;
  }
`;

const linkStyles = css`
  text-decoration: none;
  color: inherit;
  padding: 10px;
  &:hover {
    color: blue;
  }
`;

const themeButtonsWrapperStyles = css`
  text-decoration: none;
  color: inherit;
  button {
    margin: 10px;
  }
`;
const HeaderMenu: React.FC = () => {
  const { user } = useAuth();
  const { onChangeTheme } = useTheme();

  const menuItems = [
    { text: "login", to: routes.LOGIN },
    { text: "register", to: routes.REGISTER },
    { text: "dashboard", to: routes.DASHBOARD },
    { text: "about-us", to: routes.ABOUTUS },
  ];

  return (
    <Fragment>
      <nav className={headerMenuStyles}>
        {menuItems.map((item) => (
          <NavLink className={linkStyles} to={item.to}>
            {item.text}{" "}
          </NavLink>
        ))}
        {user?.email && (
          <NavLink className={linkStyles} to={"/logout"}>
            logout
          </NavLink>
        )}
      </nav>
      <div className={themeButtonsWrapperStyles}>
        <Button
          label="firstTheme"
          onClick={() => onChangeTheme("firstTheme")}
        />
        <Button
          label="secondTheme"
          onClick={() => onChangeTheme("secondTheme")}
        />
        <Button
          label="thirdTheme"
          onClick={() => onChangeTheme("thirdTheme")}
        />
        <Button
          label="fourthTheme"
          onClick={() => onChangeTheme("fourthTheme")}
        />
      </div>
    </Fragment>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className={footerStyles}>
      <p>This is the footer sentence.</p>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  user?: { username: string };
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={layoutStyles}>
      <header>
        <HeaderMenu />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
