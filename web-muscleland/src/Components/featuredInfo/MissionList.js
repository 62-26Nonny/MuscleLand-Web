import { DataGrid } from "@mui/x-data-grid";
import "./missionList.css";

export default function MissionList(props) {
  return (
    <div className="tableMission">
      <div style={{ height: 400, width: "82.5%" }}>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          pageSize={10}
          checkboxSelection
        />
      </div>
    </div>
  );
}
