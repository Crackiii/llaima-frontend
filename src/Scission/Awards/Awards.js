import React from "react";
import styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Awards = (props) => {
  return (
    <Container
      fluid
      className={styles.awardsContainer}
      style={{ opacity: "0.93" }}
      id="awards"
    >
      <Row className="justify-content-center">
        <Col sm={12} md={12} lg={12}>
          <div className={styles.head}>Awards</div>
        </Col>
        <Col sm={12} md={4} lg={3} className={styles.awards}>
          <div className={styles.awardWrap}>
            <img
              src="https://theboardgameworkshop.com/wp-content/uploads/2019/09/cropped-header-1024x341.png"
              alt="bgw"
            />
            <p>2020 finalist</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Awards;
