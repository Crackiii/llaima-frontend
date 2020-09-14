import React, { useEffect, createRef } from "react";
import styles from "./styles.module.scss";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { navWidth } from "../../helpers/resize";
import { Link } from "react-router-dom";

const customNav = createRef();
const SocialNav = (props) => {
  useEffect(() => {
    navWidth(customNav);
  }, []);
  window.addEventListener("resize", () => navWidth(customNav));
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg={"dark"}
        variant="dark"
        fixed="top"
        className={styles.linksNav}
        ref={customNav}
        id="nav"
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
            <Dropdown className={styles.navDrop}>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className={styles.dropToggle}
              >
                Games
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="/games/scission"
                  className={styles.dropItem}
                >
                  Scission
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#about" className={styles.navLink + " _navLink"}>
              About
            </Nav.Link>
            <Nav.Link
              href="#subscribe"
              className={styles.navLink + " _navLink"}
            >
              Subscribe
            </Nav.Link>
            <Nav.Link href="#social" className={styles.navLink + " _navLink"}>
              Social
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default SocialNav;
