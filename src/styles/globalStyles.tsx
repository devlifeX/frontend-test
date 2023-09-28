import { Global, css } from "@emotion/react";
import { useTranslation } from "react-i18next";

// Export the Global component with your styles
export const GlobalStyles = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  const globalStyles = css`
    :root {
      --border-radius: 10px;
      --border-color: #ffff;
      --focus-input-color: #007bff;
      --box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      direction: ${isRTL ? "rtl" : "ltr"};
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }

    /* Add more global styles as needed */
  `;
  // const classes = useStyles({ lng: "fa" });
  return <Global styles={globalStyles} />;
};
