import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { rows, columns } from "../../data/shopListData";
export default function UserList(props) {
  return (
    <div className="tableList">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
}