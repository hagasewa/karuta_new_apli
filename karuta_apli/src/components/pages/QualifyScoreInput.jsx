/* 予選得点入力ページ  class*/

import { useContext } from "react";
import { QualifyScoreContext } from "../../Providers/QualifyScoreProvider";
import { QualifyScoreInputCard } from "../organisms/QualifyScoreInputCard";

export const QualifyScoreInput = () => {
  const { QualifyScore } = useContext(QualifyScoreContext);
  const HighSchooleteam = QualifyScore[0];

  /* 予選得点入力コンポーネント 　このコンポーネントでは、高学年団体・個人　低学年団体・個人のクラスを切り替える*/
  return (
    <>
      {HighSchooleteam.Block.map((block,index) => (
        <QualifyScoreInputCard {...block} key={index} ScoreValueElement={{classEl:0,blockEl:index,round:0}}/>
      ))}
    </>
  );
};
