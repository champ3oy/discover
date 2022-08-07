import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import styles from "../styles/Loading.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(true);
  const [width, setwidth] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 300,
    });

    if (typeof window !== "undefined") {
      let width_ =
        document.body.clientWidth ||
        window.innerHeight ||
        document.documentElement.clientHeigh;

      setwidth(width_);
    }

    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className={styles.hero2imgs}>
        <img
          data-aos="fade-right"
          className={styles.heroleft}
          src="l2.png"
          alt="hero"
        />

        <img
          data-aos="fade-left"
          className={styles.heroright}
          src="l1.png"
          alt="hero"
        />
      </div>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;
