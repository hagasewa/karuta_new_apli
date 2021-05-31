/* X回戦入力フォーム */

import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext, useState, VFC } from "react";
import { CompetitionType,  ScoreValueElementType } from "../../Providers/QualifyScoreInit";
import { QualifyScoreContext } from "../../Providers/QualifyScoreProvider";
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

type Props ={
  Competition:CompetitionType[];
  RoundNumber:string;
  ScoreValueElement:ScoreValueElementType

}
export const RoundScoreInput: VFC<Props> = (props) => {

  const {QualifyScore} = useContext(QualifyScoreContext)
  const { Competition, RoundNumber, ScoreValueElement} = props
  const {classEl,blockEl,roundEl}= ScoreValueElement
  const classes = useStyles();

  //奇数行と偶数行で背景色を変更
  const InputRow = [classes.InputRowEven, classes.InputRowOdd];

  
  const [CompetitionValue0, setCompetitionValue0] = useState<CompetitionType>(Competition[0])
  const [CompetitionValue1, setCompetitionValue1] = useState<CompetitionType>(Competition[1])
  const [CompetitionValue2, setCompetitionValue2] = useState<CompetitionType>(Competition[2])
 // const { name1, point1, ma1, name2, point2, ma2 } = CompetitionValue

 //子コンポーネントで変更された対戦スコアステートを変更する
  const onChangeCompetitionScore0=(Competition:CompetitionType)=>{
    setCompetitionValue0(Competition)
  }
  const onChangeCompetitionScore1=(Competition:CompetitionType)=>{
    setCompetitionValue1(Competition)
  }
  const onChangeCompetitionScore2=(Competition:CompetitionType)=>{
    setCompetitionValue2(Competition)
  }

  const onClickWriteScore: () => void=()=>{
    QualifyScore[classEl]["Block"][blockEl]["Round"][roundEl].Competition[0]=CompetitionValue0
    QualifyScore[classEl]["Block"][blockEl]["Round"][roundEl].Competition[1]=CompetitionValue1
    QualifyScore[classEl]["Block"][blockEl]["Round"][roundEl].Competition[2]=CompetitionValue2
    console.log("QualifyScore:",QualifyScore[classEl]["Block"][blockEl]["Round"][roundEl].Competition)
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
          <CompetitionScoreInput {...CompetitionValue0} onChangeCompetitionScore={onChangeCompetitionScore0}/>
        </div>
        <div className={InputRow[0]}>
          <CompetitionScoreInput {...CompetitionValue1} onChangeCompetitionScore={onChangeCompetitionScore1}/>
        </div>
        <div className={InputRow[1]}>
          <CompetitionScoreInput {...CompetitionValue2} onChangeCompetitionScore={onChangeCompetitionScore2}/>
        </div>

    </>
  );
};
