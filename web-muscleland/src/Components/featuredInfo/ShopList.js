import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
<<<<<<< Updated upstream
=======
import { rows, columns } from "../../data/shopListData";
>>>>>>> Stashed changes
import { Container, Row, Col } from "react-bootstrap";

export default function UserList(props) {
  return (
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
  );
}
