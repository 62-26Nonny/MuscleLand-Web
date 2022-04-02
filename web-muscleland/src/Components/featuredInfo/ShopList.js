import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { rows, columns } from "../../data/shopListData";
import { Container, Row, Col } from "react-bootstrap";

export default function UserList(props) {
  return (
    <Container>
      <Col lg={10} xl="auto">
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
      </Col>
    </Container>
  );
}
