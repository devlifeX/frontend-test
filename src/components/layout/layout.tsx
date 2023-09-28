import React from "react";
import { css } from "@emotion/css"; // Import css from Emotion
import HeaderMenu from "./header";
import Footer from "./footer";

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
