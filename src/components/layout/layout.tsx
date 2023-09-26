import React from "react";
import { css } from "@emotion/css"; // Import css from Emotion
import { NavLink } from "react-router-dom";

// Define styles for the header menu
const headerMenuStyles = css`
  background-color: white;
  color: black;
  padding: 20px;
`;

// Define styles for the footer
const footerStyles = css`
  background-color: white;
  color: black;
  text-align: center;
  padding: 10px;
`;

// Define styles for the layout
const layoutStyles = css`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const HeaderMenu: React.FC = () => {
  const menuItems = [
    { text: "login", to: "/login" },
    { text: "register", to: "/register" },
    { text: "dashboard", to: "/dashboard" },
    { text: "about-us", to: "/" },
  ];

  return (
    <nav className={headerMenuStyles}>
      {menuItems.map((item, index) => (
        <NavLink to={item.to}>{item.text} </NavLink>
      ))}
      {/* {user?.username && <button onClick={() => logout()}>logout</button>} */}
    </nav>
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
