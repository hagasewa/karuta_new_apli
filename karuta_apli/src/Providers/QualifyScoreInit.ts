export type CompetitionType = {
  name1: string;
  point1: number;
  ma1: boolean;
  name2: string;
  point2: number;
  ma2: boolean;
}

export type RoundType = {
  RoundNumber: string;
  Competition: CompetitionType[];
}

export type BlockType = {
  BlockName: string;
  Round: RoundType[];
}

export type ClassType = {
  ClassName: string;
  Block: BlockType[]
}

export type QualifyScoreType =  ClassType[];

export type ScoreValueElementType={
  classEl:number ;
  blockEl:number ;
  roundEl:number ;
}




export const QualifyScoreInit: QualifyScoreType = [{
    ClassName: "高学年団体",
    Block: [{
      BlockName: "Aブロック",
      Round: [{
        RoundNumber: "1回戦",
        Competition: [
          { name1: "西富A", point1: 0, ma1: false, name2: "伸栄A", point2: 0, ma2: false, },
          { name1: "若松E", point1: 0, ma1: false, name2: "牛沼C", point2: 0, ma2: false, },
          { name1: "北秋津C", point1: 0, ma1: false, name2: "小手指E", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "2回戦",
        Competition: [
          { name1: "西富A", point1: 0, ma1: false, name2: "若松E", point2: 0, ma2: false, },
          { name1: "伸栄A", point1: 0, ma1: false, name2: "北秋津C", point2: 0, ma2: false, },
          { name1: "牛沼C", point1: 0, ma1: false, name2: "小手指E", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "3回戦",
        Competition: [
          { name1: "西富A", point1: 0, ma1: false, name2: "牛沼C", point2: 0, ma2: false, },
          { name1: "伸栄A", point1: 0, ma1: false, name2: "小手指E", point2: 0, ma2: false, },
          { name1: "若松E", point1: 0, ma1: false, name2: "北秋津C", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "4回戦",
        Competition: [
          { name1: "西富A", point1: 0, ma1: false, name2: "北秋津C", point2: 0, ma2: false, },
          { name1: "伸栄A", point1: 0, ma1: false, name2: "牛沼C", point2: 0, ma2: false, },
          { name1: "若松E", point1: 0, ma1: false, name2: "小手指E", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "5回戦",
        Competition: [
          { name1: "西富A", point1: 0, ma1: false, name2: "小手指E", point2: 0, ma2: false, },
          { name1: "伸栄A", point1: 0, ma1: false, name2: "若松E", point2: 0, ma2: false, },
          { name1: "牛沼C", point1: 0, ma1: false, name2: "北秋津C", point2: 0, ma2: false, }]
      }]


    }, {
      BlockName: "Bブロック",
      Round: [{
        RoundNumber: "1回戦",
        Competition: [
          { name1: "西富B", point1: 4, ma1: false, name2: "小手指D", point2: 0, ma2: false, },
          { name1: "所沢B", point1: 0, ma1: false, name2: "若松F", point2: 0, ma2: false, },
          { name1: "牛沼A", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "2回戦",
        Competition: [
          { name1: "西富B", point1: 0, ma1: false, name2: "所沢B", point2: 0, ma2: false, },
          { name1: "小手指D", point1: 0, ma1: false, name2: "牛沼A", point2: 0, ma2: false, },
          { name1: "若松F", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "3回戦",
        Competition: [
          { name1: "西富B", point1: 0, ma1: false, name2: "若松F", point2: 0, ma2: false, },
          { name1: "小手指D", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, },
          { name1: "所沢B", point1: 0, ma1: false, name2: "牛沼A", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "4回戦",
        Competition: [
          { name1: "西富B", point1: 0, ma1: false, name2: "牛沼A", point2: 0, ma2: false, },
          { name1: "小手指D", point1: 0, ma1: false, name2: "若松F", point2: 0, ma2: false, },
          { name1: "所沢B", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "5回戦",
        Competition: [
          { name1: "西富B", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, },
          { name1: "小手指D", point1: 0, ma1: false, name2: "所沢B", point2: 0, ma2: false, },
          { name1: "若松F", point1: 0, ma1: false, name2: "牛沼A", point2: 0, ma2: false, }]
      }]
    }]}
  ]
  /* ,
        HighSchoolSingle: {
        ClassName: "高学年個人"
      },
        LowSchooleTeam: {
        ClassName: "低学年団体",
      },
        LowSchooleSingle: {
        ClassName: "低学年個人"
      }
   */



