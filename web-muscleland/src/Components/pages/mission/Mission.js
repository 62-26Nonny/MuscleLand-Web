import MissionInfo from "../../featuredInfo/MissionInfo";
import "./mission.css";
import MissionList from "../../featuredInfo/MissionList";
import { useState, useEffect } from "react";
import { axiosNoAuthenInstance } from "../../../axios";

export default function Mission() {

  const [missionData, setMissionData] = useState([]);

  useEffect(() => {
    axiosNoAuthenInstance.get('/quest').then((res) =>{
      setMissionData(res.data);
      console.log(res.data)
    })
  },[])

  const missionList = (Array.from(missionData).map((val,key) => {
    return { id: val.questID, description: val.description, clearRate: "69"}
  }))
  
  console.log(missionList)

  return (
    <div className="mission">
      <MissionInfo />
      <MissionList rows = {missionList} />
    </div>
  );
}
