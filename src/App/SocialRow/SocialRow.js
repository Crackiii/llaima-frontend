import React from "react";
import styles from "./styles.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialRow = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className={styles.column} style={{ backgroundColor: "#3b5998" }}>
          <a
            target="_blank"
            href="https://www.facebook.com/llaimagames"
            className={styles.colLink}
          >
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
            Facebook
          </a>
        </Col>
        <Col className={styles.column} style={{ backgroundColor: "#00acee" }}>
          <a
            target="_blank"
            href="https://twitter.com/LlaimaGames"
            className={styles.colLink}
          >
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            Twitter
          </a>
        </Col>
        <Col className={styles.column} style={{ backgroundColor: "#c4302b" }}>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCxnRyfVWoJNgeAyGkAftGfw"
            className={styles.colLink}
          >
            <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
            Youtube
          </a>
        </Col>
        <Col className={styles.column} style={{ backgroundColor: "#C13584" }}>
          <a
            target="_blank"
            href="https://www.instagram.com/llaimagames/"
            className={styles.colLink}
          >
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            Instagram
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialRow;
