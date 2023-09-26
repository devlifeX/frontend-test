import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
  button: {
    backgroundColor: theme.primaryColor,
    color: theme.thirdinaryColor,
    borderColor: theme.secondaryColor,
    padding: "10px 20px",
    border: "1px solid",
    borderRadius: "var(--border-radius)",
    cursor: "pointer",
  },
}));

export default useStyles