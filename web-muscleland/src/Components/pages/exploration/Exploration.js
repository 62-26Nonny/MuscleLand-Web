import ExplorationInfo from "../../featuredInfo/ExploInfo";
import BarChart from "../../chart/BarChart";
import { dataDistance } from "../../../data/exploData";
import "./exploration.css";

export default function Exploration() {
  return (
    <div className="exploration">
      <ExplorationInfo />
      <BarChart title="Player Cumulative distance" data={dataDistance} />
    </div>
  );
}
