/* 予選得点入力フォーム Block*/

import { Box, Card, CardHeader, createStyles, Divider, makeStyles, Theme, } from "@material-ui/core";
import { RoundScoreInput } from "./RoundScoreInput";
import { RoundType } from "../../Providers/QualifyScoreInit"
import React, { VFC } from "react";

  type Props ={
    Round:RoundType[];
    BlockName:string;
  }
export const QualifyScoreInputCard: VFC<Props> = (props) => {
  const classes = useStyles()
  const { Round, BlockName } = props

  /* 得点入力のブロックカードを表示
    下位コンポーネントにRoundのデータを渡す */
  return (
    <Card className={classes.Card}>
      <CardHeader title={BlockName} className={classes.header} />
      <Box display="flex">
        <Divider orientation="vertical" flexItem />
        {Round.map((round, index) => (
         <React.Fragment key={index} >
            <Box flexGrow={1}  className={classes.roundBox}>
              <RoundScoreInput {...round} />
            </Box>
            <Divider orientation="vertical" flexItem />
         </React.Fragment >
        ))}

      </Box>
    </Card >

  )
}

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