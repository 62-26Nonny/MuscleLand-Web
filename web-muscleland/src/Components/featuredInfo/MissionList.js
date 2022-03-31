import { DataGrid } from "@mui/x-data-grid";
import "./missionList.css";
import { rows, columns } from "../../data/missionListData";
export default function MissionList(props) {
  return (
    <div className="tableMission">
      <div style={{ height: 400, width: "75%" }}>
        <DataGrid
          rows={props.rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
}
