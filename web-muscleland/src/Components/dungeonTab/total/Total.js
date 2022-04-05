import React, { useContext } from "react";
import MyPieChart from "../../chart/TotalClearRateChart";
import { DungeonDataContext } from "../../pages/dungeon/Dungeon";


export default function Total() {
  const dungeonData = useContext(DungeonDataContext);

  const Arr = Array.from( dungeonData )
  console.log(Arr)
  var clearRate = [
    {name: "Squat",
    complete: 0,
    fail: 0
    },
    {name: "Rising Knee",
    complete: 0,
    fail: 0
    },
    {name: "Jumping Jack",
    complete: 0,
    fail: 0
    }
  ]
  const SquatID = 1
  const RisingKneeID = 2
  const JpJID = 3
  if (Arr.length !== 0) {
    for(var i=0;i<Arr.length;i++) {
      if(Arr[i].dungeonID == SquatID) {
        clearRate[0].complete = clearRate[0].complete+Arr[i].total
      }
      else if(Arr[i].dungeonID == RisingKneeID) {
        clearRate[1].complete = clearRate[1].complete+Arr[i].total
      }
      else if(Arr[i].dungeonID == JpJID) {
        clearRate[2].complete = clearRate[2].complete+Arr[i].total
      }
    }
    for(var j=0;j<clearRate.length;j++) {
      clearRate[j].complete = clearRate[j].complete-clearRate[j].fail
    }
  }
  return (
    <div>
      <div>
        <h3>Clear rate</h3>
        <div>
          <MyPieChart data={clearRate} title="Player clear rate"/>
        </div>
      </div>
    </div>
  );
}
