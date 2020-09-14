import React from "react";
import styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const StoryLine = (props) => {
  return (
    <Row
      className="justify-content-center"
      style={{ backgroundColor: "#fff", margin: "0", opacity: "0.85" }}
      id="storyline"
    >
      <Col sm={12} md={8} lg={6}>
        <div className={styles.storyline}>
          <div className={styles.head}>Story Line</div>
          <p>
            Scission is an engine building, last-person-standing battle card
            game that includes resource allocation mechanics. It is set in a
            steampunk universe. A game lasts about 45 minutes, and can be played
            by 2 to 4 people, ages 12 and up. Scission introduces original card
            racks that hold cards in upright position, revealing partial
            information about your army to other players. Although highly
            strategic, it works great for casual play.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default StoryLine;
