import MissionInfo from "../../featuredInfo/MissionInfo";
import "./mission.css";
import MissionList from "../../featuredInfo/MissionList";
import { useState, useEffect } from "react";
import { axiosNoAuthenInstance } from "../../../axios";

export default function Mission() {
  const [Achievement, SetAchievement] = useState([]);
  const [UserAchievement, SetUserAchievement] = useState([]);
  const [QuestData, setQuestData] = useState([]);
  const [Level, setLevel] = useState([]);
  const [User, setUser] = useState([]);

  function mergeArrayObjects(arr1, arr2) {
    return arr1.map((item, i) => {
      if (item.id === arr2[i].id) {
        //merging two objects
        return Object.assign({}, item, arr2[i]);
      }
    });
  }

  function NaNCheck(num) {
    if (!num) return 0;
    return num;
  }
  function DungeonNaNCheck(str) {
    if (!str) return " ";
    return " in " + str + " mode ";
  }

  useEffect(() => {
    let Questdata;
    let Achievementdata;
    let UserAchievementdata;

    async function GetQuestData() {
      let res = await axiosNoAuthenInstance.get("/quest");
      Questdata = res.data;
      console.log(Questdata);
      setQuestData(Questdata)
    }

    async function GetAchievementData() {
      let res = await axiosNoAuthenInstance.get("/achievement");
      Achievementdata = res.data;
      SetAchievement(Achievementdata);
    }

    async function GetUserAchievementData() {
      let res = await axiosNoAuthenInstance.get("/userachievement");
      UserAchievementdata = res.data;
      SetUserAchievement(UserAchievementdata);

      const lvl = res.data.reduce((p, c) => {
        var curlvl = c.curlvl;
        if (!p.hasOwnProperty(curlvl)) {
          p[curlvl] = 0;
        }
        p[curlvl]++;
        return p;
      }, {});
      
      setLevel(lvl);
      console.log(lvl)
    }

    async function GetUserSum() {
      let res = await axiosNoAuthenInstance.get("/usersum");
      setUser(res.data);
    }


    GetQuestData();
    GetAchievementData();
    GetUserAchievementData();
    GetUserSum()
  }, []);

  const reducedachievement = UserAchievement.reduce((acc, { curlvl, arcID }) => (
    { 
      ...acc, 
      [arcID]: acc[arcID] ? [ ...acc[arcID], { curlvl }] : [ { curlvl } ],
    }
  ), {});

  for (let i = 1; i <= Achievement.length; i++) {
    reducedachievement[i] =  reducedachievement[i].reduce((p, c) => {
      var curlvl = c.curlvl;
      if (!p.hasOwnProperty(curlvl)) {
        p[curlvl] = 0;
      }
      p[curlvl]++;
      return p;
    }, {});
  }

  console.log(reducedachievement)

  const questListData = QuestData.map((val, key) => {
    return {
      id: val.questID,
      description: val.description,
      type: val.type,
      clearRate: NaNCheck(val.totalcomplest / val.totalaccept),
    };
  });

  const achievementListData = Achievement.map((val, key) => {
    return {
      id: val.arcID,
      description: "Play " + val.arcname + DungeonNaNCheck(val.difficulty) +  val.times + " time",
      level1: NaNCheck(reducedachievement[val.arcID][1])/4 * 100,
      level2: NaNCheck(reducedachievement[val.arcID][2])/4 * 100,
      level3: NaNCheck(reducedachievement[val.arcID][3])/4 * 100,
      level4: NaNCheck(reducedachievement[val.arcID][4])/4 * 100,
    };
  });

  console.log(achievementListData);
  const questColumns = [
    { field: "id", headerName: "Mission ID", width: 50 },
    { field: "description", headerName: "Description", width: 260 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "clearRate", headerName: "Clear rate (%)", width: 130 },
  ];

  const achievementColumns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "description", headerName: "Description", width: 280 },
    { field: "level1", headerName: "level 1 (%)", width: 80 },
    { field: "level2", headerName: "level 2(%)", width: 80 },
    { field: "level3", headerName: "level 3(%)", width: 80},
    { field: "level4", headerName: "level 4(%)", width: 80}
  ];

  const findAverageAge = (arr) => {
    const { length } = arr;
    return arr.reduce((acc, val) => {
      return acc + val.clearRate / length;
    }, 0);
  };

  return (
    <div className="mission">
      <MissionInfo AverageMission={findAverageAge(questListData)} />
      {/* <MissionList rows = {questListData} />
      <MissionList rows = {achievementListData} /> */}
      <MissionList rows={questListData} columns={questColumns} />
      <MissionList rows={achievementListData} columns={achievementColumns} />
      <div>
        {/* {AchievementListData.map((val, key) => {
          return(
          <p>
            {val}
          </p>
          ) 
        })} */}
      </div>
    </div>
  );
}
