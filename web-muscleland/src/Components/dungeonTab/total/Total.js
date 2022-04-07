import React, { useContext } from "react";
import MyPieChart from "../../chart/TotalClearRateChart";
import { DungeonDataContext } from "../../pages/dungeon/Dungeon";


export default function Total() {
  const {dungeonData, userData} = useContext(DungeonDataContext);

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
      // if(Arr[i].total < Arr[i].fail) continue;
      if(Arr[i].dungeonID == SquatID) {
        clearRate[0].complete += Arr[i].total;
        clearRate[0].fail += Arr[i].fail;
      }
      else if(Arr[i].dungeonID == RisingKneeID) {
        clearRate[1].complete += Arr[i].total;
        clearRate[1].fail += Arr[i].fail;
      }
      else if(Arr[i].dungeonID == JpJID) {
        clearRate[2].complete += Arr[i].total;
        clearRate[2].fail += Arr[i].fail;
      }
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
