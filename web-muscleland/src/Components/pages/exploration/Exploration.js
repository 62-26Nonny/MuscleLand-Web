import React, { useState, useEffect } from "react";
import ExplorationInfo from "../../featuredInfo/ExploInfo";
import BarChart from "../../chart/BarChart";
import "./exploration.css";
import { axiosNoAuthenInstance } from "../../../axios";



export default function Exploration() {
  const [exploreData, exploreStat] = useState([]);
  useEffect(() => {
    axiosNoAuthenInstance.get('/exploration').then((res) => {
      exploreStat(res.data);
      // console.log(res.data);
    })
  }, [])
  var distanceGroup = [
    {name: "less than 10 km",
    number: 0
    },
    {name: "10-20 km",
    number: 0
    },
    {name: "20-30 km",
    number: 0
    },
    {name: "30-40 km",
    number: 0
    },
    {name: "40-50 km",
    number: 0
    },
    {name: "more than 50 km",
    number: 0
    }
  ]
  const Arr = Array.from(exploreData)
  if (Arr.length !== 0) {
    var aveDistance = 0;
    var dailyDistance = 0;
    for(var i=0;i<Arr.length;i++) {
      dailyDistance = Arr[i].currentdistance/1000;
      aveDistance = aveDistance + dailyDistance;
      if (10 > dailyDistance) {
        distanceGroup[0].number = distanceGroup[0].number + 1;
      }
      else if (10 <= dailyDistance && 20 > dailyDistance) {
        distanceGroup[1].number = distanceGroup[1].number + 1;
      }
      else if (20 <= dailyDistance && 30 > dailyDistance) {
        distanceGroup[2].number = distanceGroup[2].number + 1;
      }
      else if (30 <= dailyDistance && 40 > dailyDistance) {
        distanceGroup[3].number = distanceGroup[3].number + 1;
      }
      else if (40 <= dailyDistance && 50 > dailyDistance) {
        distanceGroup[4].number = distanceGroup[4].number + 1;
      }
      else {
        distanceGroup[5].number = distanceGroup[5].number + 1;
      }
    }
    aveDistance = aveDistance/Arr.length;
  }
  console.log(aveDistance)
  return (
    <div className="exploration">
      <ExplorationInfo data = {aveDistance}/>
      <BarChart title="Player Cumulative distance" data = {distanceGroup} />
    </div>
  );
}
