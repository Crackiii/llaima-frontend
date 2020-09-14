import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const LiamaCarousel = (props) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showBook, setShowBook] = useState(true);
  const toggleOverlay = () => setShowOverlay(!showOverlay);
  const mouseEnter = () => {}
  const mouseLeave = () => {}
  return (
    <>
      <div className={styles.video} style={props.style} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {showBook ? props.top : <></>}
        {showOverlay ? (
          <div className={styles.overlay}>
            <div className={styles.overlayFlex}>
              <div className={styles.overlayText}>{props.text1}</div>
              <FontAwesomeIcon
                icon={faYoutube}
                className={styles.icon}
                onClick={toggleOverlay}
              />
              <div className={styles.overlayText}>{props.text2}</div>
            </div>
            {props.children}
          </div>
        ) : (
          <></>
        )}

        <iframe
          src={props.video}
          frameBorder="0"
          allow="autoplay; encrypted-media;"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default LiamaCarousel;
