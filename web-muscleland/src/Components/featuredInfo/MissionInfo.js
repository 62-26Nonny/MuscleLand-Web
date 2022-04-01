export default function MissionInfo(props) {
  return (
    <div className="info">
      <div className="infoItem">
        <span className="infoTitle">Average Mission Clear rate</span>
        <span className="distance">{props.AverageMission}%</span>
      </div>
      <div className="infoItem">
        <span className="infoTitle">Average Achievement Clear rate</span>
        <span className="distance">45% </span>
      </div>
    </div>
  );
}
