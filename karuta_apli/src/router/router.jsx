import { Switch, Route } from "react-router-dom";
import { FinalScoreInput } from "../components/pages/FinalScoreInput";
import { QualifyScoreInput } from "../components/pages/QualifyScoreInput";
import { Setting } from "../components/pages/Setting";
import { PlayersList } from "../components/pages/PlayersList";
import { UsersManagement } from "../components/pages/UsersManagement";
import { ScoreSheet } from "../components/pages/ScoreSheet";
import { Login } from "../components/pages/Login";
import { Management } from "../components/templates/Management ";
import { Page404 } from "../components/pages/Page404";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useIsSessionToken } from "../fooks/useIsSessionToken";

const routers = [
  {
    path: "/qualify-score-input",
    exact: false,
    children: <QualifyScoreInput />,
  },
  {
    path: "/final-score-input",
    exact: false,
    children: <FinalScoreInput />,
  },
  {
    path: "/teams",
    exact: false,
    children: <PlayersList />,
  },
  {
    path: "/user",
    exact: false,
    children: <UsersManagement />,
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />,
  },
];


export const Router = () => {
  const {token} = useContext(AuthContext) 
  const IsSessionToken=useIsSessionToken()
  console.log(token)
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/score">
        <ScoreSheet />
      </Route>

      {IsSessionToken() ? routers.map((route) => (
        <Route key={route.path} exact={route.exact} path={route.path}>
          <Management>{route.children}</Management>
        </Route>
      )):null}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
