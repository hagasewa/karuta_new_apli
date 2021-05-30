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

export type QualifyScoreType = {
  HigSchoolTeam: ClassType;
};

export const QualifyScoreInit: QualifyScoreType = {
  HigSchoolTeam: {
    ClassName: "高学年団体",
    Block: [{
      BlockName: "Aブロック",
      Round: [{
        RoundNumber: "1回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "2回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "3回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "4回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "5回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 10, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }]


    }, {
      BlockName: "Bブロック",
      Round: [{
        RoundNumber: "1回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "2回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "3回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "4回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }, {
        RoundNumber: "5回戦",
        Competition: [
          { name1: "チームA", point1: 0, ma1: false, name2: "チームB", point2: 0, ma2: false, },
          { name1: "チームC", point1: 0, ma1: false, name2: "チームD", point2: 0, ma2: false, },
          { name1: "チームE", point1: 0, ma1: false, name2: "チームF", point2: 0, ma2: false, }]
      }]


    }]
  }
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

}
