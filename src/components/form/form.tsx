import React from "react";
import { css } from "@emotion/css";

const formStyles = css`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

interface FormProps {
  handleSubmit: (data: any) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ handleSubmit, children }) => {
  return (
    <form className={formStyles} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
