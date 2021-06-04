/* 得点表テーブル */

import { Card, CardHeader, makeStyles } from "@material-ui/core";
import { VFC } from "react"
import { teamDataListInit, QualifyPlayingField } from "../../Providers/QualifyScoreInit"

function createData(ownTeam: string, teamA: number | '-', teamB: number | '-', teamC: number | '-', teamD: number | '-', teamE: number | '-', teamF: number | '-', victory: number, point: number, rank: number) {
  return { ownTeam, teamA, teamB, teamC, teamD, teamE, teamF, victory, point, rank };
}

type rowsType = {
  ownTeam: string;
  teamA: number | '-';
  teamB: number | '-';
  teamC: number | '-';
  teamD: number | '-';
  teamE: number | '-';
  teamF: number | '-';
  victory: number;
  point: number;
  rank: number
}

export const RoundUpTable: VFC = () => {

  //対戦表の名前と順番を取得　BlockTeamIds：
  const BlockTeamIds: string[] = QualifyPlayingField[0].Block[0].BlockTeamIds

  const nameA = teamDataListInit[BlockTeamIds[0]].name
  const nameB = teamDataListInit[BlockTeamIds[1]].name
  const nameC = teamDataListInit[BlockTeamIds[2]].name
  const nameD = teamDataListInit[BlockTeamIds[3]].name
  const nameE = teamDataListInit[BlockTeamIds[4]].name
  const nameF = teamDataListInit[BlockTeamIds[5]].name
  const rows: rowsType[] = []

  /* 対戦表結果を対戦表に反映する処理 */
  for (let i = 0; i < BlockTeamIds.length; i++) {
    let win=0
    let total=0

    /* 勝ち数と総取得枚数をカウント */
    for(let j=0;j<BlockTeamIds.length;j++){
      if(teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[j]].win)
        win++
      if('-' !== teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[j]].number)
        total += teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[j]].number as number
    }
    
    /* 各試合結果と総合点などをテーブル用のデータに代入 */
    rows[i] = (createData(
      teamDataListInit[BlockTeamIds[i]].name,
      teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[0]].number,
      teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[1]].number,
      teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[2]].number,
      teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[3]].number,
      teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[4]].number,
      teamDataListInit[BlockTeamIds[i]].resultList[BlockTeamIds[5]].number,
      total,
      win,
      1
    ))
  }


  const classes = useStyles();
  return (
    <Card className={classes.TalbeCard} >
      <CardHeader title="Aブロック" className={classes.header} />
      <table className={classes.table} >
        <thead>
          <tr>
            <th className={classes.tableCell}></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>{nameA}</span></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>{nameB}</span></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>{nameC}</span></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>{nameD}</span></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>{nameE}</span></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>{nameF}</span></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>勝敗</span></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>得点</span></th>
            <th className={classes.tableCell}><span className={classes.writingMode}>順位</span></th>
          </tr>

        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.ownTeam}>
              <th className={classes.tableCell}><span className={classes.writingMode}>{row.ownTeam}</span></th>
              <td className={classes.tableCell}>{row.teamA}</td>
              <td className={classes.tableCell}>{row.teamB}</td>
              <td className={classes.tableCell}>{row.teamC}</td>
              <td className={classes.tableCell}>{row.teamD}</td>
              <td className={classes.tableCell}>{row.teamE}</td>
              <td className={classes.tableCell}>{row.teamF}</td>
              <td className={classes.tableCell}>{row.victory}</td>
              <td className={classes.tableCell}>{row.point}</td>
              <td className={classes.tableCell}>{row.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>

  )
}


const useStyles = makeStyles({
  header: {
    background: '#007BBB',
    color: "#FFF",
    padding: "10px "
  },

  //対戦表CSS
  writingMode: {
    writingMode: "vertical-rl",
    textOrientation: "upright",
    margin: "auto"
  },
  table: {
    margin: "10px auto",
    borderCollapse: "collapse",
  },
  tableCell: {
    width: 28,
    padding: "5px 0",
    marginTop: "auto",
    textAlign: "center",
    border: "1px solid #666",
    fontSize: 12
  },
  TalbeCard:
  {
    marginTop: 20,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    width: 320,
    borderRadius: 20,
    background: "#BCE2E8"
  }
})