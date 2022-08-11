import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import styles from "../styles/Loading.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  const [width, setwidth] = useState(0);
  const [heigth, setheigth] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 300,
    });

    if (typeof window !== "undefined") {
      let width_ =
        document.body.clientWidth ||
        window.innerHeight ||
        document.documentElement.clientHeigh;

      let heigth_ = window.innerHeight || document.documentElement.clientHeigh;

      setwidth(width_);
      setheigth(heigth_);
    }

    setTimeout(() => {
      // setloading(false);
    }, 3000);
  }, []);

  function scrollToWindow() {
    // window.scrollTo({
    //   top: heigth,
    //   left: 0,
    //   behavior: "smooth",
    // });
    // setTimeout(() => {
    //   setloading(true);
    // }, 2000);
    document.getElementById("main").style.top = `0px`;
    document.getElementById("main").style.position = "absolute";
  }

  return (
    <div className={styles.overall}>
      <div
        style={{
          display: loading ? "none" : "flex",
        }}
        className={styles.hero2imgs}
      >
        {width > 1 && width < 600 ? (
          <img
            data-aos="fade-right"
            className={styles.heroleft}
            src="lm1.png"
            alt="hero"
          />
        ) : (
          <img
            data-aos="fade-right"
            className={styles.heroleft}
            src="l2.png"
            alt="hero"
          />
        )}

        <div className={styles.con}>
          <div className={styles.hm}>
            {width > 1 && width < 600 ? (
              <img className={styles.logo} src="logo.png" alt="hero" />
            ) : (
              <img className={styles.logo} src="logo2.png" alt="hero" />
            )}
            <div className={styles.texts}>
              {width < 600 ? null : <h1>Discover.App</h1>}
              <p>
                The power of engaged communities in discovering new apps, games,
                contents, creators, products and brands
              </p>
            </div>
          </div>

          <div className={styles.hb}>
            <img className={styles.ard} src="ard.png" alt="hero" />

            <div
              onClick={() => {
                scrollToWindow();
              }}
              className={styles.hero3btn}
            >
              Enter the experience
            </div>
          </div>
        </div>
        {width < 600 ? (
          <img
            data-aos="fade-left"
            className={styles.heroright}
            src="lm2.png"
            alt="hero"
          />
        ) : (
          <img
            data-aos="fade-left"
            className={styles.heroright}
            src="l1.png"
            alt="hero"
          />
        )}
      </div>
      <div id="main" className={styles.main}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
