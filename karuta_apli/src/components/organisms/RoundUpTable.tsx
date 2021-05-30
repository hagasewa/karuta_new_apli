/* 得点表テーブル */

import { Card, CardHeader, makeStyles } from "@material-ui/core";
import { VFC } from "react"

function createData(ownTeam: string, teamA: number | '-', teamB: number | '-', teamC: number | '-', teamD: number | '-', teamE: number | '-', teamF: number | '-', victory: number, point: number, rank: number) {
  return { ownTeam, teamA, teamB, teamC, teamD, teamE, teamF, victory, point, rank };
}

const rows = [
  createData('チームA', '-', 15, 40, 22, 15, 5, 3, 150, 2),
  createData('チームB', 30, '-', 40, 22, 15, 5, 3, 150, 2),
  createData('チームC', 30, 15, '-', 22, 15, 5, 3, 150, 2),
  createData('チームD', 30, 15, 40, '-', 15, 5, 3, 150, 2),
  createData('チームE', 30, 15, 40, 22, '-', 5, 3, 150, 2),
  createData('チームF', 30, 15, 40, 22, 15, '-', 3, 150, 2),
]


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

export const RoundUpTable: VFC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.TalbeCard} >
    <CardHeader title="Aブロック" className={classes.header} />
    <table className={classes.table} >

    <tr>
      <th className={classes.tableCell}></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>チームA</span></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>チームB</span></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>チームC</span></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>チームD</span></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>チームE</span></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>チームF</span></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>勝敗</span></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>得点</span></th>
      <th className={classes.tableCell}><span className={classes.writingMode}>順位</span></th>
    </tr>


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

  </table>
  </Card>

  )
}