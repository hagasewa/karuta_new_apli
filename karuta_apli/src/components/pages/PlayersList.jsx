/* チームリスト */

import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlayersListApiUrl } from "../../initialize/PlayersListApiUrl";
import { PlayersListTableData } from "../molecules/PlayersListTableData";
const useStyles = makeStyles({
  table: {
    margin: "10px auto",
    borderCollapse: "collapse",
  },
  tableCell: {
    padding: "5px 10px",
    marginTop: "auto",
    textAlign: "center",
    border: "1px solid #666",
    fontSize: 12,
    background:"#DDD"
  },
});
export const PlayersList = () => {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [PlayersList, setPlayersList] = useState([]);

  useEffect(() => {
    axios.get(PlayersListApiUrl).then(
      (result) => {
        setIsLoaded(true);
        setPlayersList(result.data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>:{error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table className={classes.table}>
        <thead>
        <tr>
          <th className={classes.tableCell}>校区</th>
          <th className={classes.tableCell}>チーム</th>
          <th className={classes.tableCell}>ブロック</th>
          <th className={classes.tableCell}>名前1</th>
          <th className={classes.tableCell}>フリガナ1</th>
          <th className={classes.tableCell}>学年1</th>
          <th className={classes.tableCell}>性別1</th>
          <th className={classes.tableCell}>名前2</th>
          <th className={classes.tableCell}>フリガナ2</th>
          <th className={classes.tableCell}>学年2</th>
          <th className={classes.tableCell}>性別2</th>
          <th className={classes.tableCell}>名前3</th>
          <th className={classes.tableCell}>フリガナ3</th>
          <th className={classes.tableCell}>学年3</th>
          <th className={classes.tableCell}>性別3</th>
          <th className={classes.tableCell}>名前4</th>
          <th className={classes.tableCell}>フリガナ4</th>
          <th className={classes.tableCell}>学年4</th>
          <th className={classes.tableCell}>性別4</th>
        </tr>
        </thead>
        <tbody>
        {PlayersList.map((player, index) => (
          <tr key={index}>
            <PlayersListTableData {...player} />
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
};
