import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import * as d3 from "d3";
import { Col, Row, Container } from "react-bootstrap";
import Modal from "../../Components/Modal/Modal";
import Carousel from "../../Components/Car/Carousel";

function Cards() {
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");
  let visible = true;

  useEffect(() => call(), []);

  function call() {
    async function parseCSV() {
      let data = await d3.csv("./images/cards/card_reference.csv");
      let sorted = data.sort((a, b) =>
        a.color < b.color ? 1 : b.color < a.color ? -1 : 0
      );
      setCards([...sorted]);
    }
    parseCSV();
  }

  return (
    <Container className={styles.cards} style={{ opacity: "0.85" }} id="cards">
      {window.matchMedia("(max-width: 767px)").matches ? (
        <Carousel cards={cards.length > 0 ? cards : []} />
      ) : (
        <Row className={styles.row}>
          <Col sm={12} md={12} lg={12}>
            <div className={styles.head}>Cards</div>
          </Col>
          {cards.length > 0 ? (
            cards.map((card, index) => {
              return visible ? (
                <Col className={styles.card} key={index} sm={12} md={2} lg={1}>
                  <div
                    className={styles.cardImage}
                    onClick={() => {
                      setShowModal(!showModal);
                      setModalData(`./images/cards/${card.img}`);
                    }}
                  >
                    <img
                      src={`./images/cards/${card.img}`}
                      alt={card.img}
                      onError={() => {
                        let filtered = cards.filter(
                          (item) => card.img !== item.img
                        );
                        setCards([...filtered]);
                      }}
                    />
                  </div>
                </Col>
              ) : (
                <></>
              );
            })
          ) : (
            <></>
          )}
        </Row>
      )}
      <Modal
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        data={modalData}
      />
    </Container>
  );
}

export default Cards;
