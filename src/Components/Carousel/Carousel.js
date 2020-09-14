import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ControlledCarousel() {
  useEffect(() => mouseLeave(), []);
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
    >
      <Carousel.Item className={styles.carouselItem}>
        <a href="/games/scission">
          <div
            style={{
              backgroundImage: "url(./images/scission_logo.png)",
            }}
            className={styles.carouselImage}
          ></div>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
