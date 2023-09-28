import React, { ChangeEvent } from "react";
import useStyles from "../../utility/createUseStyles";
import { css } from "@emotion/css";

const inputStyles = css`
  input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid;
    border-radius: var(--border-radius);
    width: 100%;
  }
`;

interface InputProps {
  type: string;
  value: string;
  name?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  theme?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  name,
  placeholder,
  onChange,
  theme,
}) => {
  const classes = useStyles({ theme });
  return (
    <div className={inputStyles}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={classes.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
