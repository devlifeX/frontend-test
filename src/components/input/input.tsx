import React, { ChangeEvent } from "react";
import { css } from "@emotion/css";

const inputStyles = css`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  &:focus {
    outline: none;
    border-color: var(--focus-input-color);
    box-shadow: var(--box-shadow);
  }
`;

interface InputProps {
  type: string;
  value: string;
  name?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={inputStyles}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
