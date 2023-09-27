import { createUseStyles } from 'react-jss';

const useStyles:any = createUseStyles((theme: any) => ({
  button: {
    backgroundColor: theme.primaryColor,
    color: theme.thirdinaryColor,
    borderColor: theme.secondaryColor,
    padding: "10px 20px",
    border: "1px solid",
    borderRadius: "var(--border-radius)",
    cursor: "pointer",
  },
  input:{
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid",
    borderColor: theme.primaryColor,
    borderRadius: "var(--border-radius)",
  }
}));

export default useStyles