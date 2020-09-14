import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as d3 from "d3";

function ControlledCarousel(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    mouseLeave();
    call();
  }, []);

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
  const [nextIcon, setNextIcon] = useState(
    <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "30px" }} />
  );
  const [prevIcon, setPrevIcon] = useState(
    <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "30px" }} />
  );
  const mouseEnter = () => {
    setNextIcon(
      <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "30px" }} />
    );
    setPrevIcon(
      <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "30px" }} />
    );
  };
  let visible = true;

  const mouseLeave = () => {
    setPrevIcon(<></>);
    setNextIcon(<></>);
  };

  return (
    <Carousel
      interval={3000}
      className={styles.carousel}
      controls={true}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      nextIcon={nextIcon}
      prevIcon={prevIcon}
      id="games"
    >
      {cards.length > 0 ? (
        cards.map((card, index) => {
          return visible ? (
            <Carousel.Item className={styles.carouselItem} key={index}>
              <div
                style={{
                  backgroundImage: `url(./images/cards/${card.img})`,
                }}
                className={styles.carouselImage}
              ></div>
            </Carousel.Item>
          ) : (
            <></>
          );
        })
      ) : (
        <></>
      )}
    </Carousel>
  );
}

export default ControlledCarousel;
