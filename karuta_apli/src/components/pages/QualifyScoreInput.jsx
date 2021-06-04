/* 予選得点入力ページ  class*/

import { QualifyPlayingField } from "../../Providers/QualifyScoreInit";
import { QualifyScoreInputCard } from "../organisms/QualifyScoreInputCard";

export const QualifyScoreInput = () => {

  const HighSchooleteam = QualifyPlayingField[0];

  /* 予選得点入力コンポーネント 　このコンポーネントでは、高学年団体・個人　低学年団体・個人のクラスを切り替える*/
  return (
    <>
      {HighSchooleteam.Block.map((block,index) => (
        <QualifyScoreInputCard {...block} key={index} ScoreValueElement={{classEl:0,blockEl:index,round:0}}/>
      ))}
    </>
  );
};
