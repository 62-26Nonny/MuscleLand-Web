import MissionInfo from "../../featuredInfo/MissionInfo";
import "./mission.css";
import MissionList from "../../featuredInfo/MissionList";
import { useState, useEffect } from "react";
import { axiosNoAuthenInstance } from "../../../axios";

export default function Mission() {

  const [mergeachievement, setmergeachievement] = useState([]);
  const [Achievement, SetAchievement] = useState([]);
  const [UserAchievement, SetUserAchievement] = useState([]);
  const [QuestData, setQuestData] = useState([]);

  function mergeArrayObjects(arr1,arr2){
    return arr1.map((item,i)=>{
       if(item.id === arr2[i].id){
           //merging two objects
         return Object.assign({},item,arr2[i])
       }
    })
  }

  function NaNCheck(num) {
    if(!num) return 0
    return num
  }
  function DungeonNaNCheck(str) {
    if(!str) return " "
    return " in " + str + " mode "
  }

  useEffect(() => {
    let Questdata
    let QuestStatdata
    let Achievementdata
    let UserAchievementdata

    async function GetQuestData() {
      let res = await axiosNoAuthenInstance.get('/quest')
      Questdata = res.data
      setQuestData(Questdata)
      console.log(Questdata)
    }

    async function GetAchievementData() {
      let res = await axiosNoAuthenInstance.get('/achievement')
      Achievementdata = res.data
      SetAchievement(Achievementdata)
    }

    async function GetUserAchievementData() {
      let res = await axiosNoAuthenInstance.get('/userachievement')
      UserAchievementdata = res.data
      SetUserAchievement(UserAchievementdata)
    }

    GetQuestData()
    GetAchievementData()
    GetUserAchievementData()
  },[])
  
  const questListData = (QuestData.map((val,key) => {
    return { id: val.questID, description: val.description ,type: val.type , clearRate: NaNCheck(val.totalcomplest/val.totalaccept) }
  }))

  const achievementListData = (Achievement.map((val,key) => {
    return { id: val.arcID, description: "Play " + val.arcname + DungeonNaNCheck(val.difficulty) + val.times +" time", clearRate: 0 }
  }))

  console.log(achievementListData)
  const questColumns = [
    { field: "id", headerName: "Mission ID", width: 130 },
    { field: "description", headerName: "Description", width: 260 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "clearRate", headerName: "Clear rate (%)", width: 130 },
  ];

  const achievementColumns = [
    { field: "id", headerName: "Achievement ID", width: 130 },
    { field: "description", headerName: "Description", width: 280 },
    { field: "clearRate", headerName: "Clear rate (%)", width: 130 },
  ];

  const findAverageAge = (arr) => {
    const { length } = arr;
    return arr.reduce((acc, val) => {
    return acc + (val.clearRate/length);
    }, 0);
  };

  return (
    <div className="mission"> 
      <MissionInfo AverageMission = {findAverageAge(questListData)} />
      {/* <MissionList rows = {questListData} />
      <MissionList rows = {achievementListData} /> */}
      {/* <MissionList rows = {questListData} columns = {questColumns}/> */}
      {/* <MissionList rows = {achievementListData} columns = {achievementColumns}/> */}
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


