export type CompetitionType = {
  AteamId: string;
  BteamId: string;
}

export type RoundType = {
  RoundNumber: string;
  Competition: CompetitionType[];
}

export type BlockType = {
  BlockName: string;
  BlockTeamIds: string[]
  Round: RoundType[];
}

export type ClassType = {
  ClassName: string;
  Block: BlockType[]
}

export type QualifyPlayingFieldType = ClassType[];

export type ScoreValueElementType = {
  classEl: number;
  blockEl: number;
  roundEl: number;
}


export const QualifyPlayingField: QualifyPlayingFieldType = [{
  ClassName: "高学年団体",
  Block: [{
    BlockName: "Aブロック",
    BlockTeamIds: ["f8h3z9yx", "x5b6s8gh", "j5qihgv4", "w4xyd79r", "p6x4dwjk", "w7fgtjnm"],
    Round: [{
      RoundNumber: "1回戦",
      Competition: [
        { AteamId: "f8h3z9yx", BteamId: "x5b6s8gh" },
        { AteamId: "j5qihgv4", BteamId: "w4xyd79r" },
        { AteamId: "p6x4dwjk", BteamId: "w7fgtjnm" }]
    }, {
      RoundNumber: "2回戦",
      Competition: [

        { AteamId: "f8h3z9yx", BteamId: "j5qihgv4" },
        { AteamId: "x5b6s8gh", BteamId: "p6x4dwjk" },
        { AteamId: "w4xyd79r", BteamId: "w7fgtjnm" }]
    }, {
      RoundNumber: "3回戦",
      Competition: [
        { AteamId: "f8h3z9yx", BteamId: "w4xyd79r" },
        { AteamId: "x5b6s8gh", BteamId: "w7fgtjnm" },
        { AteamId: "j5qihgv4", BteamId: "p6x4dwjk" }]
    }, {
      RoundNumber: "4回戦",
      Competition: [
        { AteamId: "f8h3z9yx", BteamId: "p6x4dwjk" },
        { AteamId: "x5b6s8gh", BteamId: "w4xyd79r" },
        { AteamId: "j5qihgv4", BteamId: "w7fgtjnm" }]
    }, {
      RoundNumber: "5回戦",
      Competition: [
        { AteamId: "f8h3z9yx", BteamId: "w7fgtjnm" },
        { AteamId: "x5b6s8gh", BteamId: "j5qihgv4" },
        { AteamId: "w4xyd79r", BteamId: "p6x4dwjk" }]
    }]


  }, {
    BlockName: "Bブロック",
    BlockTeamIds: ["x6gtynpa", "x7tqarvf", "t6je9ar3", "e8xvy5n4", "u826tdsx", "e3fjyk7m"],
    Round: [{
      RoundNumber: "1回戦",
      Competition: [
        { AteamId: "x6gtynpa", BteamId: "x7tqarvf" },
        { AteamId: "t6je9ar3", BteamId: "e8xvy5n4" },
        { AteamId: "u826tdsx", BteamId: "e3fjyk7m" },
   /*    { name1: "西富B", point1: 4, ma1: false, name2: "小手指D", point2: 0, ma2: false, },
      { name1: "所沢B", point1: 0, ma1: false, name2: "若松F", point2: 0, ma2: false, },
      { name1: "牛沼A", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, } */]
    }, {
      RoundNumber: "2回戦",
      Competition: [
        { AteamId: "x6gtynpa", BteamId: "t6je9ar3" },
        { AteamId: "x7tqarvf", BteamId: "u826tdsx" },
        { AteamId: "e8xvy5n4", BteamId: "e3fjyk7m" },
      /* { name1: "西富B", point1: 0, ma1: false, name2: "所沢B", point2: 0, ma2: false, },
      { name1: "小手指D", point1: 0, ma1: false, name2: "牛沼A", point2: 0, ma2: false, },
      { name1: "若松F", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, } */]
    }, {
      RoundNumber: "3回戦",
      Competition: [
        { AteamId: "x6gtynpa", BteamId: "e8xvy5n4" },
        { AteamId: "x7tqarvf", BteamId: "e3fjyk7m" },
        { AteamId: "t6je9ar3", BteamId: "u826tdsx" },
   /*    { name1: "西富B", point1: 0, ma1: false, name2: "若松F", point2: 0, ma2: false, },
      { name1: "小手指D", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, },
      { name1: "所沢B", point1: 0, ma1: false, name2: "牛沼A", point2: 0, ma2: false, } */]
    }, {
      RoundNumber: "4回戦",
      Competition: [
        { AteamId: "x6gtynpa", BteamId: "u826tdsx" },
        { AteamId: "x7tqarvf", BteamId: "e8xvy5n4" },
        { AteamId: "t6je9ar3", BteamId: "e3fjyk7m" },
/*       { name1: "西富B", point1: 0, ma1: false, name2: "牛沼A", point2: 0, ma2: false, },
      { name1: "小手指D", point1: 0, ma1: false, name2: "若松F", point2: 0, ma2: false, },
      { name1: "所沢B", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, } */]
    }, {
      RoundNumber: "5回戦",
      Competition: [
        { AteamId: "x6gtynpa", BteamId: "e3fjyk7m" },
        { AteamId: "x7tqarvf", BteamId: "t6je9ar3" },
        { AteamId: "e8xvy5n4", BteamId: "u826tdsx" },
 /*      { name1: "西富B", point1: 0, ma1: false, name2: "明峰C", point2: 0, ma2: false, },
      { name1: "小手指D", point1: 0, ma1: false, name2: "所沢B", point2: 0, ma2: false, },
      { name1: "若松F", point1: 0, ma1: false, name2: "牛沼A", point2: 0, ma2: false, } */]
    }]
  }]
}
]

export type resultType = {
  number: number | '-';
  ma: boolean;
  win:boolean;
}
export type resultListType = {
  [key: string]: resultType;

}


export type teamType = {
  name: string;
  resultList: resultListType
}

export type teamDataListType = {
  [key: string]: teamType
}


export const teamDataListInit: teamDataListType = {
  f8h3z9yx: {
    name: "西富A",
    resultList: {
    }
  },
  x5b6s8gh: {
    name: "伸栄A",
    resultList: {}
  },
  j5qihgv4: {
    name: "若松E",
    resultList: {}
  },
  w4xyd79r: {
    name: "牛沼C",
    resultList: {}
  },
  p6x4dwjk: {
    name: "北秋津C",
    resultList: {}
  },
  w7fgtjnm: {
    name: "小手指E",
    resultList: {}
  },
  x6gtynpa: {
    name: "西富B",
    resultList: {}
  },
  x7tqarvf: {
    name: "小手指D",
    resultList: {}
  },
  e8xvy5n4: {
    name: "若松E",
    resultList: {}
  },
  t6je9ar3: {
    name: "所沢B",
    resultList: {}
  },
  u826tdsx: {
    name: "牛沼A",
    resultList: {}
  },
  e3fjyk7m: {
    name: "明峰C",
    resultList: {}
  }
}



//とりあえずテスト用の対戦結果データを初期化
const BlockTeamIds1 = QualifyPlayingField[0].Block[0].BlockTeamIds
const BlockTeamIds2 = QualifyPlayingField[0].Block[1].BlockTeamIds

for (let i = 0; i < BlockTeamIds1.length; i++) {
  for (let j = 0; j < BlockTeamIds1.length; j++) {
    teamDataListInit[BlockTeamIds1[i]].resultList[BlockTeamIds1[j]]={} as resultType
    if (BlockTeamIds1[i] !== BlockTeamIds1[j]) {
      teamDataListInit[BlockTeamIds1[i]].resultList[BlockTeamIds1[j]].number = 0
    } else {
      teamDataListInit[BlockTeamIds1[i]].resultList[BlockTeamIds1[j]].number = '-'
    }
    teamDataListInit[BlockTeamIds1[i]].resultList[BlockTeamIds1[j]].ma = false
    teamDataListInit[BlockTeamIds1[i]].resultList[BlockTeamIds1[j]].win= false
  }
}

for (let i = 0; i < BlockTeamIds2.length; i++) {
  for (let j = 0; j < BlockTeamIds2.length; j++) {
    teamDataListInit[BlockTeamIds2[i]].resultList[BlockTeamIds2[j]]={} as resultType
    if (BlockTeamIds2[i] !== BlockTeamIds2[j]) {
      teamDataListInit[BlockTeamIds2[i]].resultList[BlockTeamIds2[j]].number = 0
    } else {
      teamDataListInit[BlockTeamIds2[i]].resultList[BlockTeamIds2[j]].number = '-'
    }
    teamDataListInit[BlockTeamIds2[i]].resultList[BlockTeamIds2[j]].ma = false
    teamDataListInit[BlockTeamIds1[i]].resultList[BlockTeamIds1[j]].win= false

  }
}