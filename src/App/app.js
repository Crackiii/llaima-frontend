import React from "react";
import styles from "./styles.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import SocialNav from "./SocialNav/SocialNav";
import LinksNav from "./LinksNav/LinksNav";
import LiamaCarousel from "./LiamaCarousel/LiamaCarousel";
import About from "./About/About";
import SocialRow from "./SocialRow/SocialRow";
import NewsLetter from "./NewsLetter/NewsLetter";
import Footer from "./Footer/Footer";
import { Container } from "react-bootstrap";

const App = (props) => {
  return (
    <div
      style={{
        display: "block",
        backgroundColor: "#f5f5f5",
        border: "1px solid transparent",
      }}
    >
      <Container id="socialNav"></Container>
      <SocialNav />
      <LinksNav />
      <Container>
        <LiamaCarousel />
        <About />
        <NewsLetter />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
