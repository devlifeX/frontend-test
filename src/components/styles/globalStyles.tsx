import { Global, css } from "@emotion/react";

// Define global styles
const globalStyles = css`
  :root {
    --border-radius: 10px;
    --border-color: #ffff;
    --focus-input-color: #007bff;
    --box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  /* Add more global styles as needed */
`;

// Export the Global component with your styles
export const GlobalStyles = () => <Global styles={globalStyles} />;
