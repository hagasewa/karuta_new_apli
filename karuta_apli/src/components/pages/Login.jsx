import { Button, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { GoogleAuth } from "../molecules/GoogleAuth";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 300,
    height: 300,
    marginTop:200,

  },
  header:{
    background:theme.palette.primary.main,
    color:"white",
    textAlign:"center",
    padding:10,
  },
  textfield:{
    width:240,
    marginTop:10
  },
  button:{
    width:240,
    marginTop:10
  },
  img:{
    marginTop:20
  }
}));
export const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        

          <Paper  elevation={3} className={classes.paper}>
            <Typography variant="h4" className={classes.header}>ログイン</Typography>

            <Grid container justify="center">
            <TextField id="outlined-basic" label="ログインID" variant="outlined" className={classes.textfield}/>
            
            <TextField id="outlined-basic" label="名前" variant="outlined" className={classes.textfield}/>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              className={classes.button}
            >IDでログイン</Button>
            <GoogleAuth />
            </Grid>
          </Paper>
   
      </Grid>
    </>
  );
};
