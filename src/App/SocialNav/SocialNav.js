import React, { useEffect, createRef } from "react";
import styles from "./styles.module.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTwitter,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { navWidth } from "../../helpers/resize";
const socialNav = createRef();
const SocialNav = (props) => {
  useEffect(() => {
    navWidth(socialNav);
  }, []);
  window.addEventListener("resize", () => navWidth(socialNav));
  return (
    <>
      <Navbar
        className={styles.slNavbar}
        fixed="top"
        ref={socialNav}
        id="social"
      >
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <a
              className={styles.socialLinks + ""}
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=2221349159"
              title="Steam"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faSteam}
                style={{ fontSize: "18px", marginTop: "6px" }}
              />
            </a>
            <a
              className={styles.socialLinks}
              href="https://www.youtube.com/channel/UCxnRyfVWoJNgeAyGkAftGfw"
              title="YouTube"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              className={styles.socialLinks}
              href="https://www.instagram.com/llaimagames/"
              title="@llaimagames"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className={styles.socialLinks}
              href="https://twitter.com/LlaimaGames"
              title="@LlaimaGames"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className={styles.socialLinks}
              href="https://www.facebook.com/llaimagames"
              title="Facebook"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default SocialNav;
