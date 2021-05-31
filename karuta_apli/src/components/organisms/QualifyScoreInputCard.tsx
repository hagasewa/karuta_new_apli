/* 予選得点入力フォーム Block*/

import { Box, Card, CardHeader, createStyles, Divider, makeStyles, Theme, } from "@material-ui/core";
import { RoundScoreInput } from "./RoundScoreInput";
import { RoundType, ScoreValueElementType } from "../../Providers/QualifyScoreInit"
import React, { VFC } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      background: theme.palette.primary.dark,
      color: "#FFF",
      padding: "10px "
    },

    Card: {
      marginBottom: 20
    },

    roundBox: {
      maxWidth: 400,
    },
  }))

  type Props ={
    Round:RoundType[];
    BlockName:string;
    ScoreValueElement:ScoreValueElementType
  }
export const QualifyScoreInputCard: VFC<Props> = (props) => {
  const classes = useStyles()
  const { Round, BlockName ,ScoreValueElement} = props

  /* 得点入力のブロックカードを表示 */
  return (
    <Card className={classes.Card}>
      <CardHeader title={BlockName} className={classes.header} />
      <Box display="flex">

        <Divider orientation="vertical" flexItem />
        {Round.map((round, index) => (
         <React.Fragment key={index} >
            <Box flexGrow={1}  className={classes.roundBox}>
              <RoundScoreInput {...round} ScoreValueElement={{...ScoreValueElement,roundEl:index}}/>
            </Box>
            <Divider orientation="vertical" flexItem />
         </React.Fragment >
        ))}

      </Box>
    </Card >

  )
}