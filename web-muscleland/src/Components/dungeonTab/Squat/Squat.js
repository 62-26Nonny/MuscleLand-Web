import React, { useContext } from "react";
import MyPieChart from "../../chart/PieChart";
import Squatinfo from "./Squatinfo";
import { DungeonDataContext } from "../../pages/dungeon/Dungeon";

export default function JumpingJack() {
  const dungeonData = useContext(DungeonDataContext);

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
        if(Arr[i].difficulty == "easy") easy = easy+Arr[i].total
        else if(Arr[i].difficulty == "medium") medium = medium+Arr[i].total
        else if(Arr[i].difficulty == "hard") hard = hard+Arr[i].total
      }
    }
  }
  console.log(SquatData)
  console.log(easy, medium, hard)
  var difficultyRation = [
    { name: "easy", value: easy },
    { name: "medium", value: medium },
    { name: "hard", value: hard },
  ];
  console.log(difficultyRation)
  return (
    <div>
      <div>
        <Squatinfo data={SquatData}/>
        <MyPieChart data={difficultyRation}/>
      </div>
    </div>
  );
}
