import styles from "../styles/Home.module.scss";

import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  const [width, setwidth] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 500,
    });

    if (typeof window !== "undefined") {
      let width_ =
        document.body.clientWidth ||
        window.innerHeight ||
        document.documentElement.clientHeigh;

      setwidth(width_);
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footercontent}>
        <h1>
          The first token powered video discovery <br />
          platform & community for everyone. <br />
          <span className={styles.yellow}>Join Us!</span>
        </h1>

        <div className={styles.input}>
          <input type="text" placeholder="Enter your email" />
          <div className={styles.footerbtn}>Sign Up</div>
        </div>
      </div>

      {width <= 600 ? (
        <nav className={styles.fnav}>
          <div className={styles.fnavleft}>
            <img className={styles.logo} src="logo.png" alt="logo" />

            <div className={styles.ftexts}>
              The first video AppStore for discovering apps, <br />
              games, contents & creators
              <br />
              <br />
              &copy; Discover.App 2022
            </div>

            {/* <strong>Company</strong> */}
            <div className={styles.fnavlinks}>
              {/* <a href="#">Privacy</a>
              <a href="#">Blog</a>
              <a href="#">Help Center</a>
              <a href="#">FAQ</a>
              <a href="#">Team</a>
              <a href="#">Terms of Service</a> */}
            </div>
          </div>
          <div className={styles.fnavright}>
            {/* <img className={styles.icon} src="yt2.png" alt="logo" />
            <img className={styles.icon} src="tk2.png" alt="logo" />
            <img className={styles.icon} src="ig2.png" alt="logo" />
            <img className={styles.icon} src="tw2.png" alt="logo" /> */}
          </div>
        </nav>
      ) : (
        <nav className={styles.fnav}>
          <div className={styles.fnavleft}>
            <img className={styles.logo} src="logo.png" alt="logo" />

            <div className={styles.navlinks}>
              <a href="#">&copy; Discover.App 2022</a>
            </div>
          </div>
          <div className={styles.fnavright}>
            {/* <img className={styles.icon} src="yt.png" alt="logo" />
            <img className={styles.icon} src="tk.png" alt="logo" />
            <img className={styles.icon} src="ig.png" alt="logo" />
            <img className={styles.icon} src="tw.png" alt="logo" /> */}
          </div>
        </nav>
      )}
    </footer>
  );
}
