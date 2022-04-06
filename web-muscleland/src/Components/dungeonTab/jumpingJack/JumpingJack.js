import React, { useContext } from "react";
import MyPieChart from "../../chart/PieChart";
import JpJinfo from "./Jumpingjackinfo";
import { DungeonDataContext } from "../../pages/dungeon/Dungeon";

export default function JumpingJack() {
  const {dungeonData, userData} = useContext(DungeonDataContext);

  const Arr = Array.from( dungeonData )
  const JpJID = 3
  var JpJData = []
  var easy = 0
  var medium = 0
  var hard = 0
  if (Arr.length !== 0) {
    for(var i=0;i<Arr.length;i++) {
      if(Arr[i].dungeonID == JpJID) {
        JpJData.push(Arr[i])
        if(Arr[i].difficulty == "easy") easy += Arr[i].total+Arr[i].fail
        else if(Arr[i].difficulty == "medium") medium += Arr[i].total+Arr[i].fail
        else if(Arr[i].difficulty == "hard") hard += Arr[i].total+Arr[i].fail
      }
    }
  }
  console.log(JpJData)
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
        <JpJinfo data={JpJData} user={userData}/>
        <MyPieChart data={difficultyRatio} title="Difficulty Ratio"/>
      </div>
    </div>
  );
}