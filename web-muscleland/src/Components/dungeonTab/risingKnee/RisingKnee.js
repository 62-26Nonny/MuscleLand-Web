import React, { useContext } from "react";
import MyPieChart from "../../chart/PieChart";
import RisingKneeinfo from "./RisingKneeinfo";
import { DungeonDataContext } from "../../pages/dungeon/Dungeon";

export default function RisingKnee() {
  const dungeonData = useContext(DungeonDataContext);

  const Arr = Array.from( dungeonData )
  const RisingKneeID = 2
  var RisingKneeData = []
  var easy = 0
  var medium = 0
  var hard = 0
  if (Arr.length !== 0) {
    for(var i=0;i<Arr.length;i++) {
      if(Arr[i].dungeonID == RisingKneeID) {
        RisingKneeData.push(Arr[i])
        if(Arr[i].difficulty == "easy") easy = easy+Arr[i].total
        else if(Arr[i].difficulty == "medium") medium = medium+Arr[i].total
        else if(Arr[i].difficulty == "hard") hard = hard+Arr[i].total
      }
    }
  }
  console.log(RisingKneeData)
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
        <RisingKneeinfo data={RisingKneeData}/>
        <MyPieChart data={difficultyRation}/>
      </div>
    </div>
  );
}
