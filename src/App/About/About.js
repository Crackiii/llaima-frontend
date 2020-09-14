import React from "react";
import styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const About = (props) => {
  return (
    <div className={styles.about} id="about">
      <Row className="justify-content-center">
        <Col sm={11} md={10} lg={10}>
          <Row className="justify-content-md-center">
            <Col sm={12} md={8} lg={4}>
              <div className={styles.llaimaLogo}>
                <span>
                  <img src="./images/Logo_Choice.png" alt="logo" />
                </span>
              </div>
            </Col>
            <Col sm={12} md={8} lg={8}>
              <div className={styles.aboutText}>
                <div className="itemHead">LLaima Games</div>
                <p>
                  Llaima Games is an independent board game design adventure by
                  Elena Marimón Muñoz and Alexandre Larrain. We are currently
                  working on Scission, an engine-building battle card game for 2
                  to 4 players.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
