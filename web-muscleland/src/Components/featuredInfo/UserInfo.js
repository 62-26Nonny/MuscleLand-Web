import "./userInfo.css";
import { Container, Row, Col } from "react-bootstrap";

export default function UserInfo(props) {
  return (
    <Container>
      <Row>
        <div className="featured">
        <Col lg="auto" xl={6}>
            <div className="featuredItem">
              <span className="featuredTitle">Total Player</span>
              <div className="player">
                <span className="numOfPlayers">{props.totalPlayer} Player</span>
              </div>
            </div>
          </Col>
          <Col lg="auto" xl={6}>
            <div className="featuredItem">
              <span className="featuredTitle">Online Player</span>
              <div className="player">
                <div className="OnlineCircle"></div>
                <span className="numOfPlayers">{props.onlinePlayer} Player</span>
              </div>
            </div>
          </Col>
          <Col lg="auto" xl={6}>
            <div className="featuredItem">
              <span className="featuredTitle">Offline Player</span>
              <div className="player">
                <div className="OfflineCircle"></div>
                <span className="numOfPlayers">{props.offlinePlayer} Player</span>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}
