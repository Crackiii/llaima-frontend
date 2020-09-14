import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const NewsLetter = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Make Request
    console.log("[SUBMITED VALUE]: ", email);
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.newsLetter} id="subscribe">
      <Container style={{ opacity: "0.75" }}>
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={6}>
            <h3 style={{ marginBottom: "20px" }}>
              Subscribe to our mailing list
            </h3>
            <Form className={styles.subscribeForm} onSubmit={handleSubmit}>
              <Form.Control
                type="email"
                placeholder="Your email address"
                className={styles.formControl}
                onChange={handleInput}
                value={email}
                name={email}
              />
              <Button
                variant="primary"
                type="submit"
                className={styles.formSubmit}
              >
                Subscribe Now!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLetter;
