import MissionInfo from "../../featuredInfo/MissionInfo";
import "./mission.css";
import BarChart from "../../chart/BarChart";
import MissionList from "../../featuredInfo/MissionList";
import { useState, useEffect } from "react";
import { axiosNoAuthenInstance } from "../../../axios";
import { columns } from "../../../data/shopListData";

export default function Mission() {
  const [Achievement, SetAchievement] = useState([]);
  const [UserAchievement, SetUserAchievement] = useState([]);
  const [questDataList, setQuestDataList] = useState([]);
  const [questData, setQuestData] = useState([]);
  const [Level, setLevel] = useState([]);
  const [User, setUser] = useState([]);
  const [AchievementListData, setAchievementListData] = useState([]);
  const [dataDistance,setDataDistance] = useState([])

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
      Questdata = res.data.map((val, key) => {
        return {
          id: val.questID,
          description: val.description,
          type: val.type,
          clearRate: NaNCheck(val.totalcomplest / val.totalaccept)
        };
      });
      setQuestDataList(Questdata)
      setQuestData(res.data)
      
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

    async function GetUserCount() {
      let res = await axiosNoAuthenInstance.get("/usercount");
      setUser(res.data);
    }


    GetQuestData();
    GetAchievementData();
    GetUserAchievementData();
    GetUserCount()
  }, []);

  useEffect(() => {

    const reducedachievement = UserAchievement.reduce((acc, { curlvl, arcID }) => (
      { 
        ...acc, 
        [arcID]: acc[arcID] ? [ ...acc[arcID], { curlvl }] : [ { curlvl } ],
      }
    ), {});
  
    for (let i = 1; i <= Achievement.length; i++) {
      reducedachievement[i] =  reducedachievement === undefined ? "" : reducedachievement[i].reduce((p, c) => {
        var curlvl = c.curlvl;
        if (!p.hasOwnProperty(curlvl)) {
          p[curlvl] = 0;
        }
        p[curlvl]++;
        return p;
      }, {});
    }

    const achievementListData = Achievement.map((val, key) => {
      return {
        id: val.arcID,
        description: "Play " + val.arcname + DungeonNaNCheck(val.difficulty) +  val.times + " time",
        level1: User[0] === undefined ? "" : NaNCheck(reducedachievement[val.arcID][1]) / User[0].usercount  * 100,
        level2: User[0] === undefined ? "" : NaNCheck(reducedachievement[val.arcID][2]) / User[0].usercount  * 100,
        level3: User[0] === undefined ? "" : NaNCheck(reducedachievement[val.arcID][3]) / User[0].usercount  * 100,
        level4: User[0] === undefined ? "" : NaNCheck(reducedachievement[val.arcID][4]) / User[0].usercount  * 100,
      };
    });

    setAchievementListData(achievementListData)

    // const dataDistance = [
    //   {
    //     Today: (User[0] === undefined) || (Level === undefined) ? "5" : NaNCheck(Level["1"] / User[0].usercount) / Achievement.length,
    //     Km: "Level 1",
    //   },
    //   {
    //     Today: (User[0] === undefined) || (Level === undefined) ? "5" : NaNCheck(Level["2"] / User[0].usercount) / Achievement.length,
    //     Km: "Level 2",
    //   },
    //   {
    //     Today: (User[0] === undefined) || (Level === undefined) ? "5" : NaNCheck(Level["3"] / User[0].usercount) / Achievement.length,
    //     Km: "Level 3",
    //   },
    //   {
    //     Today: (User[0] === undefined) || (Level === undefined) ? "5" : NaNCheck(Level["4"] / User[0].usercount) / Achievement.length,
    //     Km: "complete",
    //   },
    // ];

    // console.log(dataDistance)
    // setDataDistance(dataDistance)

  }, [User,UserAchievement,Achievement,Level]);
  
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
    { field: "level4", headerName: "complete", width: 80}
  ];

  function findAverageAge(arr){
    const { length } = arr;
    return arr.reduce((acc, val) => {
      return acc + val.clearRate / length;
    }, 0);
  };

  console.log(Level)
  return (
    <div className="mission">
      <MissionInfo AverageMission={findAverageAge(questDataList)} />
      <MissionList rows={questDataList} columns={questColumns} />
      <MissionList rows={AchievementListData} columns={achievementColumns} />
      {/* <BarChart title="Player Average Achievement Level" data={dataDistance} /> */}
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
