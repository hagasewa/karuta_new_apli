/* 得点表 */

import {  Grid, Hidden, makeStyles, Paper, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import { Tournament } from "../organisms/Tournament";
import { RoundUpTable } from "../organisms/RoundUpTable";


export const ScoreSheet = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        alignItems="center" className={classes.header}
      >
        <Grid item xs={6}><Typography variant="h4">第30回「彩の国21世紀」郷土かるた所沢大会</Typography> </Grid>
        <Grid item xs={6}>
          <Grid container justify="flex-end"
            alignItems="center" spacing={2}>
            <Grid item><Paper className={classes.SwitchOn}>予選</Paper></Grid>
            <Grid item><Paper className={classes.SwitchOff}>決勝</Paper></Grid>
            <Grid item><Paper>
              <InputBase placeholder="校区名" id="School-search-input" className={classes.InputBase} />
              <IconButton type="submit" aria-label="search" className={classes.InputButton}>
                <SearchIcon />
              </IconButton></Paper>


            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.headermenu} alignItems="baseline"
      >
        <Grid container alignItems="center" justify="space-evenly" className={classes.activeheademenu} item xs={3}><img src="../../HighGroup.png" alt="高学年団体" />
          <Hidden xsDown><Typography variant="subtitle1">高学年団体</Typography></Hidden>
        </Grid>
        <Grid container alignItems="center" justify="space-evenly" item xs={3}><img src="../../HighPrivate.png" alt="高学年団体" />
          <Hidden xsDown><Typography variant="subtitle1">高学年個人</Typography></Hidden>
        </Grid>
        <Grid container alignItems="center" justify="space-evenly" item xs={3}><img src="../../LowGroup.png" alt="高学年団体" />
          <Hidden xsDown><Typography variant="subtitle1">低学年団体</Typography></Hidden>
        </Grid>
        <Grid container alignItems="center" justify="space-evenly" item xs={3}><img src="../../LowPrivate.png" alt="高学年団体" />
          <Hidden xsDown><Typography variant="subtitle1">低学年個人</Typography></Hidden>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >

        <Grid>
          <RoundUpTable />
        </Grid>
        <Grid>
        <Tournament />
        </Grid>
       </Grid>
    </>
  )
}


const useStyles = makeStyles({

  //ヘッダーCSS
  header: {
    background: '#007BBB',
    color: "#FFF",
    padding: "10px "
  },
  headermenu: {
    background: '#BCE2E8',
  },
  activeheademenu: {
    background: '#0095D9',
    color: "snow",
    paddingTop: "5px",
    paddingBottom: "5px"
  },
  InputButton: {
    padding: "0px 10px"
  },
  InputBase: {
    marginLeft: "15px",
    width: "100px",
    background: 'snow',
  },

  SwitchOn: {
    background: '#0095D9',
    padding: "0px 16px",
  },
  SwitchOff: {
    background: 'snow',
    padding: "0px 16px",
    color: "#333",
  }
});
