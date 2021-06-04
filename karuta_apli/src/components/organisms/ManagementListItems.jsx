/* 管理画面メニューリスト */

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GridOnIcon from "@material-ui/icons/GridOn";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {  useHistory } from "react-router-dom";
import { useGoogleAuthLogout } from "../../fooks/useGoogleAuthLogout";

//フルパスのドメインを取得
/* const getDmainPath =()=>{
  const fullPath=window.location.href
  const locationPath=window.location.pathname
  const indexPath= fullPath.indexOf(locationPath)
  return fullPath.slice(0,indexPath)
} */

export const MainListItems = () => {
  const logout = useGoogleAuthLogout()
  let history = useHistory();

  const onClickRouterPush = (url) => {
    history.push(url);
  };

  /* const dmainPath=getDmainPath(); */
  return (
    <div>
      <ListItem
        button
        onClick={() => {
          onClickRouterPush("/qualify-score-input");
        }}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="予選得点入力" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          onClickRouterPush("/final-score-input");
        }}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="決勝得点入力" />
      </ListItem>{/* 
      <Link to="/score" target="_blank"> */}

        {/* 本来は別のウィンドウに表示するが、firebaseから呼びなおさないとデータが反映されない
            現在はオミット
         <ListItem button onClick={()=>{window.open(`${dmainPath}/score`)}}> */}
        <ListItem button onClick={()=>{onClickRouterPush("/score");}}>
          <ListItemIcon>
            <GridOnIcon />
          </ListItemIcon>
          <ListItemText primary="得点表" />
        </ListItem>
     {/*  </Link> */}
      <ListItem
        button
        onClick={() => {
          onClickRouterPush("/teams");
        }}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="チーム一覧" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          onClickRouterPush("/user");
        }}
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="ユーザー管理" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          onClickRouterPush("/setting");
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="設定" />
      </ListItem>
      <ListItem onClick={()=>{logout()}}>
      <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="ログアウト" />
      </ListItem>
    </div>
  );
};
