import React from "react";
import { css } from "@emotion/css";

const buttonStyles = css`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={buttonStyles}>
      {label}
    </button>
  );
};

export default Button;
