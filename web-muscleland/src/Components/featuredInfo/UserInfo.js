import "./userInfo.css";
import { Container, Row, Col } from "react-bootstrap";

export default function UserInfo() {
  return (
    <Container>
      <Row>
        <div className="featured">
          <Col lg="auto" xl={6}>
            <div className="featuredItem">
              <span className="featuredTitle">Active Player</span>
              <div className="player">
                <div className="OnlineCircle"></div>
                <span className="numOfPlayers">69 Player</span>
              </div>
            </div>
          </Col>
          <Col lg="auto" xl={6}>
            <div className="featuredItem">
              <span className="featuredTitle">Inactive Player</span>
              <div className="player">
                <div className="OfflineCircle"></div>
                <span className="numOfPlayers">70 Player</span>
              </div>
            </div>
          </Col>
          <Col lg="auto" xl={6}>
            <div className="featuredItem">
              <span className="featuredTitle">Total Player</span>
              <div className="player">
                <span className="numOfPlayers">139 Player</span>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}
