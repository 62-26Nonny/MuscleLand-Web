import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { rows, columns } from "../../data/userListData";
export default function UserList(props) {
  return (
    <div className="tableList">
      <div style={{ height: 400, width: "95%" }}>
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
