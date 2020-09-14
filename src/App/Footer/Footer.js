import React from "react";
import styles from "./styles.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.footer} id="footer">
      <div>© {new Date().getFullYear()} Llaima Games</div>
      <div>
        Developed by :{" "}
        <a href="https://resume.io/r/KAChzxDCC" target="_blank">
          Nadeem Ahmad
        </a>
      </div>
    </div>
  );
};

export default Footer;
