import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { Container, Row, Col } from "react-bootstrap";

export default function UserList(props) {
  return (
    <div className="tableList">
      <div style={{ height: 400, width: "82.5%" }}>
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
