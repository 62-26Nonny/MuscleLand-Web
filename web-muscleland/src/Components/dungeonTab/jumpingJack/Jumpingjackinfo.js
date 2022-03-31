import React from "react";

export default function RisingKnee(props) {
  const RisingKneeData = props.data
  var Total = 0
  var Average = 0
  var Complete = 0
  RisingKneeData.forEach(element => {
    Total = Total+element.total
    Complete = Complete+element.total-element.fail
  });
  Average = Total/RisingKneeData.length
  console.log(Total, Average, Complete)
  return (
    <div className="info">
      <div className="infoItem">
        <span className="total">Total played</span>
        <span className="total">{Total} Time</span>
      </div>
      <div className="infoItem">
        <span className="average">Average played</span>
        <span className="average">{Average} Time/User</span>
      </div>
      <div className="infoItem">
        <span className="complete">Complete rate</span>
        <span className="complete">{Complete} %</span>
      </div>
    </div>
  );
}



