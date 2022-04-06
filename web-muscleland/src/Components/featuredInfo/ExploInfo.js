import React from "react";
import "./exploInfo.css";

export default function ExploInfo(prop) {
  var aveDistance = parseFloat(prop.data).toFixed(2);
  return (
    <div className="info">
      <div className="infoItem">
        <span className="infoTitle">Average distance</span>
        <span className="distance">{aveDistance} Km/Day</span>
      </div>
    </div>
  );
}
