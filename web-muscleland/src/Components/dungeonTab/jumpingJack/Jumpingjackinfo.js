import React from "react";

export default function JumpingJack(props) {
  const JumpingJackData = props.data
  var Total = 0
  var Average = 0
  var Complete = 0
  JumpingJackData.forEach(element => {
    Total = Total+element.total+element.fail
    Complete = Complete+element.total
  });
  Average = parseFloat(Total/props.user.length).toFixed(2);
  Complete = parseFloat(Complete/Total*100).toFixed(2);
  if (Total < 0) Total = 0;
  if (Average < 0) Average = 0;
  if (Complete < 0 || Complete > 100) Complete = 0;
  return (
    <div className="info">
      <div className="infoItem">
        <span className="total">Total played </span>
        <span className="total">{Total} Time</span>
      </div>
      <div className="infoItem">
        <span className="average">Average played </span>
        <span className="average">{Average} Time/User</span>
      </div>
      <div className="infoItem">
        <span className="complete">Complete rate </span>
        <span className="complete">{Complete} %</span>
      </div>
    </div>
  );
}



