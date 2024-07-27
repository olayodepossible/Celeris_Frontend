import * as React from "react";
import styles from "./Footer.module.css";
import logo1 from "../../assets/logos/Logo1.png";
import insta from "../../assets/logos/insta.png";
import facebook from "../../assets/logos/facebook.png";
import linkedin from "../../assets/logos/linkedin.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.details}>
          <img src={logo1} alt="Celeris" />
          <span className={styles.footerNav}>
            <h3>MENU</h3>
            <div className={styles.links}>
              <ul>
                <li>
                  <a href="#" className={styles.link}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Pricing
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className={styles.link}>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
        <div className={styles.socials}>
          <img src={insta} alt="insta" />
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
      <div className={styles.copywrite}>All rights reserved</div>
    </footer>
  );
}
