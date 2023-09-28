import { createUseStyles } from 'react-jss';

// just add dynamic styles here 
const useStyles:any = createUseStyles((theme: any) => ({
  button: {
    backgroundColor: theme.primaryColor,
    color: theme.thirdinaryColor,
    borderColor: theme.secondaryColor,
  },
  input:{
    borderColor: theme.primaryColor,
  },
  footer: {
    backgroundColor:theme.primaryColor,
    color: theme.thirdinaryColor,
  },
  header: {
    backgroundColor:theme.primaryColor,
    color: theme.thirdinaryColor,
  }
}));

export default useStyles