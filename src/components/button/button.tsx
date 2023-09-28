import React from "react";
import useStyles from "../../utility/createUseStyles";
import { css } from "@emotion/css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  theme?: object;
}

const inputStyles = css`
  button {
    padding: 10px 20px;
    border: 1px solid;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  theme,
}) => {
  const classes = useStyles({ theme });

  return (
    <div className={inputStyles}>
      <button onClick={onClick} disabled={disabled} className={classes.button}>
        {label}
      </button>
    </div>
  );
};

export default Button;
