import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  tableCell:{
   padding: "5px 10px",
   marginTop: "auto",
   textAlign: "center",
   border: "1px solid #666",
   fontSize: 12
 }
})

export const PlayersListTableData=(props)=>{
  const {  school,team,block,
    name1,hurigana1,grade1,gender1,
    name2,hurigana2,grade2,gender2,
    name3,hurigana3,grade3,gender3,
    name4,hurigana4,grade4,gender4}= props
  

  const classes = useStyles();
    
  return (
    <>
    <td className={classes.tableCell}>{school}</td>
    <td className={classes.tableCell}>{team}</td>
    <td className={classes.tableCell}>{block}</td>
    <td className={classes.tableCell}>{name1}</td>
    <td className={classes.tableCell}>{hurigana1}</td>
    <td className={classes.tableCell}>{grade1}</td>
    <td className={classes.tableCell}>{gender1}</td>
    <td className={classes.tableCell}>{name2}</td>
    <td className={classes.tableCell}>{hurigana2}</td>
    <td className={classes.tableCell}>{grade2}</td>
    <td className={classes.tableCell}>{gender2}</td>
    <td className={classes.tableCell}>{name3}</td>
    <td className={classes.tableCell}>{hurigana3}</td>
    <td className={classes.tableCell}>{grade3}</td>
    <td className={classes.tableCell}>{gender3}</td>
    <td className={classes.tableCell}>{name4}</td>
    <td className={classes.tableCell}>{hurigana4}</td>
    <td className={classes.tableCell}>{grade4}</td>
    <td className={classes.tableCell}>{gender4}</td>
    </>
  )
}