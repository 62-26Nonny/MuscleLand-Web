import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { rows, columns } from "../../data/shopListData";
import { Container, Row, Col } from "react-bootstrap";

export default function UserList(props) {
  return (
        <div className="tableList">
          <h3><strong>Item List</strong></h3>
          <div style={{ height: 400, width: "90%" }}>
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
