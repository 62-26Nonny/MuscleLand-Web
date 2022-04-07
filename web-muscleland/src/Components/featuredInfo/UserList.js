import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { rows, columns } from "../../data/userListData";
export default function UserList(props) {
  return (
    <div className="tableList">
      <div style={{ height: 370, width: "100%" }}>
      <h3><strong>Player List</strong></h3>
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
