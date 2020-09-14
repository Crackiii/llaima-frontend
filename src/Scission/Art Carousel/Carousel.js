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
      id="arts"
    >
      <Carousel.Item className={styles.carouselItem}>
        <div
          style={{
            backgroundImage: "url(./images/art/t1_ship.jpg)",
          }}
          className={styles.carouselImage}
        ></div>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <div
          style={{
            backgroundImage: "url(./images/art/t2_ship.jpg)",
          }}
          className={styles.carouselImage}
        ></div>
      </Carousel.Item>{" "}
      <Carousel.Item className={styles.carouselItem}>
        <div
          style={{
            backgroundImage: "url(./images/art/t4_ship.jpg)",
          }}
          className={styles.carouselImage}
        ></div>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <div
          style={{
            backgroundImage: "url(./images/art/t2_shield.jpg)",
          }}
          className={styles.carouselImage}
        ></div>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <div
          style={{
            backgroundImage: "url(./images/art/t3_shield.jpg)",
          }}
          className={styles.carouselImage}
        ></div>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <div
          style={{
            backgroundImage: "url(./images/art/research_facility.jpg)",
          }}
          className={styles.carouselImage}
        ></div>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <div
          style={{
            backgroundImage: "url(./images/art/research_project.jpg)",
          }}
          className={styles.carouselImage}
        ></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
