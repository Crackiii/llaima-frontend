import React from "react";
import styles from "./styles.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import SocialNav from "../App/SocialNav/SocialNav";
import Nav from "./Nav/Nav";
import Video from "./Video/Video";
import StoryLine from "./StoryLine/StoryLine";
import Awards from "./Awards/Awards";
import ArtCarousel from "./Art Carousel/Carousel";
import Comments from "./Comments/Comments";
import Cards from "./Cards/Cards";
import NewsLetter from "../App/NewsLetter/NewsLetter";
import Footer from "../App/Footer/Footer";
import { Container } from "react-bootstrap";

const Scission = (props) => {
  return (
    <div
      className={styles.scissionPage}
      style={{ background: "url(./images/research_facility.jpg)" }}
    >
      <Container id="socialNav"></Container>
      <SocialNav />
      <Nav />
      <Container>
        <Video
          top={<div id="intro"></div>}
          video={"https://www.youtube.com/embed/pftqIpqRJoo"}
          text1={"Watch"}
          text2={"Now !"}
          style={{ marginTop: "117px", height: "calc(100vh - 163px)" }}
        />
        <StoryLine />
        <Awards />
        <ArtCarousel />
        <NewsLetter />
        <Video
          top={
            <div className={styles.videoTop} id="how-to-play">
              <a href="./images/Scission_Rulebook.pdf" target="_blank">
                Scission Rulebook (EN)
              </a>
            </div>
          }
          video={"https://www.youtube.com/embed/dTcd5GV4yN8"}
          text1={"How to"}
          text2={"Play !"}
          style={{ height: "calc(100vh - 95px)" }}
        >
          <div className={styles.videoExtra}>
            <a href="./images/Scission_Rulebook.pdf" target="_blank">
              Scission Rulebook (EN)
            </a>
          </div>
        </Video>
        <Cards />
        <Comments />
        <Footer />
      </Container>
    </div>
  );
};

export default Scission;
