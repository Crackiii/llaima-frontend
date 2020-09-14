import React, { useEffect, createRef } from "react";
import styles from "./styles.module.scss";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { navWidth } from "../../helpers/resize";
import { Link } from "react-router-dom";

const customNav = createRef();
const ScissionNav = (props) => {
  useEffect(() => {
    navWidth(customNav);
  }, []);
  window.addEventListener("resize", () => navWidth(customNav));
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg={"dark"}
        variant="dark"
        fixed="top"
        className={styles.linksNav}
        ref={customNav}
      >
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Navbar.Brand href="/" className={styles.lnLogo} id="navBrand">
              <img src="./images/Logo_SoloDibujo.png" alt="logo" />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link
              href="/games/scission#intro"
              className={styles.navLink + " _navLink"}
            >
              Intro
            </Nav.Link>
            <Nav.Link
              href="/games/scission#storyline"
              className={styles.navLink + " _navLink"}
            >
              Storyline
            </Nav.Link>
            <Nav.Link
              href="/games/scission#awards"
              className={styles.navLink + " _navLink"}
            >
              Awards
            </Nav.Link>
            <Nav.Link
              href="/games/scission#arts"
              className={styles.navLink + " _navLink"}
            >
              Artwork
            </Nav.Link>
            <Nav.Link
              href="/games/scission#subscribe"
              className={styles.navLink + " _navLink"}
            >
              Subscribe
            </Nav.Link>
            <Nav.Link
              href="/games/scission#how-to-play"
              className={styles.navLink + " _navLink"}
            >
              How to play
            </Nav.Link>
            <Nav.Link
              href="/games/scission#cards"
              className={styles.navLink + " _navLink"}
            >
              Cards
            </Nav.Link>
            <Nav.Link
              href="/games/scission#comments"
              className={styles.navLink + " _navLink"}
            >
              Comments
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default ScissionNav;
