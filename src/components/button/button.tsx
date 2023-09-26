import React from "react";
import useStyles from "../../utility/createUseStyles";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  theme?: object;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  theme,
}) => {
  const classes = useStyles({ theme });

  return (
    <button onClick={onClick} disabled={disabled} className={classes.button}>
      {label}
    </button>
  );
};

export default Button;
