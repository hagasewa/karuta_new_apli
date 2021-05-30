import { makeStyles } from "@material-ui/core";

import { useGoogleAuthLogin } from "../../fooks/useGoogleAuthLogin";
const useStyles = makeStyles((theme) => ({
  img: {
    marginTop: 20,
  },
}));


export const GoogleAuth = () => {
  const login=useGoogleAuthLogin()
  const classes = useStyles();

  return (
    <>
      <img
        onClick={() => {
          login();
        }}
        src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png?hl=ja"
        alt="Googleからログイン"
        className={classes.img}
      />
    </>
  );
};
