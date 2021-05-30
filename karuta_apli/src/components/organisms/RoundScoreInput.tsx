/* X回戦入力フォーム */

import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { VFC } from "react";
import { RoundType } from "../../Providers/QualifyScoreInit";
import { CompetitionScoreInput } from "../molecules/CompetitionScoreInput";

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      background: theme.palette.primary.dark,
      color: "#FFF",
      padding: "10px ",
    },
    subheader: {
      background: theme.palette.primary.light,
      color: theme.palette.text.secondary,
      padding: "10px ",
    },
    input: {
      padding: "5px",
      width: 50,
      height: 20,
      border: "2px solid #333",
      borderRadius: "3px",
    },
    Card: {
      minWidth: 420,
    },
    InputRowEven: {
      background: "#F0F0F0",
      padding: "0px 10px",
    },
    InputRowOdd: {
      padding: "0px 10px",
    },
    roundBox: {
      maxWidth: 300,
    },

    EntryButton: {
      height: 20,
    },
  })
);
export const RoundScoreInput: VFC<RoundType> = (props) => {
  const { Competition, RoundNumber } = props
  const classes = useStyles();
  const InputRow = [classes.InputRowEven, classes.InputRowOdd];
/* 予選得点入力の1回戦から5回戦までのラウンドフォームを表示 */
  return (
    <>
      <Grid
        container
        className={classes.subheader}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Typography variant="h6">{RoundNumber}</Typography>

        <Button variant="contained" className={classes.EntryButton}>
          登録
        </Button>
      </Grid>

      <div className={InputRow[0]}>
        <Grid container>
          <Grid item xs={5}>チーム名</Grid>
          <Grid item xs={4}>得点</Grid>
          <Grid item xs={3}>ま札</Grid>
        </Grid>
      </div>
      {Competition.map((competition,index) => (
        <div className={InputRow[(index+1)%2]} key={index}>
          <CompetitionScoreInput {...competition} />
        </div>
      ))}
    </>
  );
};
