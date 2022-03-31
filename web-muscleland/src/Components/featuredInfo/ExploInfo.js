import React from "react";
import "./exploInfo.css";

export default function ExploInfo() {
  return (
    <div className="info">
      <div className="infoItem">
        <span className="infoTitle">Average distance</span>
        <span className="distance">100 Km/Day</span>
      </div>
      <div className="infoItem">
        <span className="infoTitle">Average cumulative distance</span>
        <span className="distance">100 Km/Month </span>
      </div>
      <div className="infoItem">
        <span className="infoTitle">Player cumulative distance in 1 month</span>
      </div>
    </div>
  );
}
