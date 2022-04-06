import React, { useContext } from "react";
import MyPieChart from "../../chart/PieChart";
import Squatinfo from "./Squatinfo";
import { DungeonDataContext } from "../../pages/dungeon/Dungeon";

export default function JumpingJack() {
  const {dungeonData, userData} = useContext(DungeonDataContext)
  const Arr = Array.from( dungeonData )
  const SquatID = 1
  var SquatData = []
  var easy = 0
  var medium = 0
  var hard = 0
  if (Arr.length !== 0) {
    for(var i=0;i<Arr.length;i++) {
      if(Arr[i].dungeonID == SquatID) {
        SquatData.push(Arr[i])
        if(Arr[i].difficulty == "easy") easy += Arr[i].total+Arr[i].fail
        else if(Arr[i].difficulty == "medium") medium += Arr[i].total+Arr[i].fail
        else if(Arr[i].difficulty == "hard") hard += Arr[i].total+Arr[i].fail
      }
    }
  }
  console.log(SquatData)
  console.log(easy, medium, hard)
  var difficultyRatio = [
    { name: "easy", value: easy },
    { name: "medium", value: medium },
    { name: "hard", value: hard },
  ];
  console.log(difficultyRatio)
  return (
    <div>
      <div>
        <Squatinfo data={SquatData} user={userData}/>
        <MyPieChart data={difficultyRatio} title="Difficulty Ratio"/>
      </div>
    </div>
  );
}
