/* X回戦入力フォーム */

import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState, VFC } from "react";
import { CompetitionType, ScoreValueElementType, teamDataListInit } from "../../Providers/QualifyScoreInit";
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

type Props = {
  Competition: CompetitionType[];
  RoundNumber: string;
  ScoreValueElement: ScoreValueElementType
}

export type CompetitionScoreType = {
  name1: string;
  point1: number;
  ma1: boolean;
  name2: string;
  point2: number;
  ma2: boolean;
}
export const RoundScoreInput: VFC<Props> = (props) => {

  //const {teamDataList} = useContext(teamDataListContext)
  const { Competition, RoundNumber } = props
  const classes = useStyles();

  //奇数行と偶数行で背景色を変更
  const InputRow = [classes.InputRowEven, classes.InputRowOdd];

  const score: CompetitionScoreType[] = []
  for (let i = 0; i < 3; i++)
    score.push(
      {
        name1: teamDataListInit[Competition[i].AteamId].name,
        point1: teamDataListInit[Competition[i].AteamId].resultList[Competition[i].BteamId].number as number,
        ma1: teamDataListInit[Competition[i].AteamId].resultList[Competition[i].BteamId].ma,
        name2: teamDataListInit[Competition[i].BteamId].name,
        point2: teamDataListInit[Competition[i].BteamId].resultList[Competition[i].AteamId].number as number,
        ma2: teamDataListInit[Competition[i].BteamId].resultList[Competition[i].AteamId].ma,
      })

  const [CompetitionScore0, setCompetitionScore0] = useState<CompetitionScoreType>(score[0])
  const [CompetitionScore1, setCompetitionScore1] = useState<CompetitionScoreType>(score[1])
  const [CompetitionScore2, setCompetitionScore2] = useState<CompetitionScoreType>(score[2])



  // const { name1, point1, ma1, name2, point2, ma2 } = CompetitionScore

  //子コンポーネントで変更された対戦スコアステートを変更する
  const onChangeCompetitionScore0 = (Competition: CompetitionScoreType) => {
    setCompetitionScore0(Competition)
  }
  const onChangeCompetitionScore1 = (Competition: CompetitionScoreType) => {
    setCompetitionScore1(Competition)
  }
  const onChangeCompetitionScore2 = (Competition: CompetitionScoreType) => {
    setCompetitionScore2(Competition)
  }

  const onClickWriteScore: () => void = () => {
    const CompetitionScore = [{ ...CompetitionScore0 }, { ...CompetitionScore1 }, { ...CompetitionScore2 }]

    // eslint-disable-next-line array-callback-return
    CompetitionScore.map((score, index) => {
      teamDataListInit[Competition[index].AteamId].resultList[Competition[index].BteamId].number = score.point1
      teamDataListInit[Competition[index].BteamId].resultList[Competition[index].AteamId].number = score.point2
      teamDataListInit[Competition[index].AteamId].resultList[Competition[index].BteamId].ma = score.ma1
      teamDataListInit[Competition[index].BteamId].resultList[Competition[index].AteamId].ma = score.ma2
      if (score.point1 > score.point2) {
        teamDataListInit[Competition[index].AteamId].resultList[Competition[index].BteamId].win = true
      } else {
        teamDataListInit[Competition[index].BteamId].resultList[Competition[index].AteamId].win = true
      }


    })

  }
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

        <Button variant="contained" className={classes.EntryButton} onClick={onClickWriteScore}>
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
      <div className={InputRow[1]}>
        <CompetitionScoreInput {...CompetitionScore0} onChangeCompetitionScore={onChangeCompetitionScore0} />
      </div>
      <div className={InputRow[0]}>
        <CompetitionScoreInput {...CompetitionScore1} onChangeCompetitionScore={onChangeCompetitionScore1} />
      </div>
      <div className={InputRow[1]}>
        <CompetitionScoreInput {...CompetitionScore2} onChangeCompetitionScore={onChangeCompetitionScore2} />
      </div>

    </>
  );
};
