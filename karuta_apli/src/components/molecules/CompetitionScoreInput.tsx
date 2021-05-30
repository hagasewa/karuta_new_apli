/* 対戦フォーム入力 */

import { Checkbox, createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import { ChangeEvent, useState, VFC } from "react";
import { CompetitionType } from "../../Providers/QualifyScoreInit";


const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      padding: '5px',
      width: 50,
      height: 20,
      border: "2px solid #333",
      borderRadius: "3px",
    }
  }))
export const CompetitionScoreInput: VFC<CompetitionType> = (props) => {
  const [CompetitionValue, setCompetitionValue] = useState<CompetitionType>(props)
  const { name1, point1, ma1, name2, point2, ma2 } = CompetitionValue
  const classes = useStyles()

  const onChangePoint1 = (e: ChangeEvent<HTMLInputElement>) => {
    setCompetitionValue({ ...CompetitionValue, point1: Number(e.target.value) })
  }
  const onChangePoint2 = (e: ChangeEvent<HTMLInputElement>) => {
    setCompetitionValue({ ...CompetitionValue, point2: Number(e.target.value) })
  }
  const onChangeMa1 = (e: ChangeEvent<HTMLInputElement>) => {
    setCompetitionValue({ ...CompetitionValue, ma1: e.target.checked, ma2: !(e.target.checked) })
  }
  const onChangeMa2 = (e: ChangeEvent<HTMLInputElement>) => {
    setCompetitionValue({ ...CompetitionValue, ma2: e.target.checked, ma1: !(e.target.checked) })
  }
/* 予選得点入力の対戦ごとの入力を表示 */
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={5}><Typography variant="subtitle1">{name1}</Typography></Grid>
        <Grid item xs={4}><input value={point1} onChange={onChangePoint1} type="number" max="66" min="0" id="GetCardNumber" className={classes.input} />点</Grid>
        <Grid item xs={3}><Checkbox color="primary" checked={ma1} onChange={onChangeMa1} /></Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid item xs={5}><Typography variant="subtitle1">{name2}</Typography></Grid>
        <Grid item xs={4}><input value={point2} onChange={onChangePoint2} type="number" max="66" min="0" id="GetCardNumber" className={classes.input} />点</Grid>
        <Grid item xs={3}><Checkbox color="primary" checked={ma2} onChange={onChangeMa2} /></Grid>
      </Grid>
    </>
  )
}