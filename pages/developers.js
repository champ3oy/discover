import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

export default function Developers() {
  const [showModal, setShowModal] = useState(false);
  const [width, setwidth] = useState("");
  const sliderRef = useRef(null);

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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Discover</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav
          onPress={() => {
            setShowModal(true);
          }}
        />

        <Carousel
          ref={sliderRef}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          showArrows={false}
          showStatus={false}
          autoPlaySpeed={10000}
          showDots={false}
          swipeable={true}
          arrows={false}
          pauseOnHover={false}
        >
          <section className={styles.hero}>
            <div className={styles.herocontent}>
              <Pagination page={1} sliderRef={sliderRef} />
              <h1>
                Showcase your <br />
                apps and games <br />
                to quality users
              </h1>
              <p>
                Get your apps and games in the hands of users quick and easy in{" "}
                <br />a fun way. Users get an experience of how your app or game
                looks <br />& feels by watching the video previews before
                downloading
              </p>
              <div
                onClick={() => {
                  sliderRef.current.next();
                }}
                className={styles.herobtn}
              >
                Sign Up
              </div>
            </div>

            <img className={styles.heroimg} src="hero1.png" alt="hero" />
          </section>
          <section className={styles.hero}>
            <div className={styles.herocontent}>
              <Pagination page={2} sliderRef={sliderRef} />
              <h1>
                User acquisition
                <br />
                on steroids! And <br />
                it’s low cost
              </h1>
              <p>
                Don’t allow your your apps and games to go unnoticed on the
                AppStore or <br />
                the PlayStore nor your hard work to go unrewarded. With
                Discover.App, your <br />
                app or game does not sink into the abyss of the AppStore or the
                PlayStore
              </p>
              <div
                onClick={() => {
                  setShowModal(true);
                }}
                className={styles.herobtn}
              >
                Sign Up
              </div>
            </div>

            <img className={styles.heroimg} src="hero1.png" alt="hero" />
          </section>
          <section className={styles.hero}>
            <div className={styles.herocontent}>
              <Pagination page={3} sliderRef={sliderRef} />
              <h1>
                Seed your game <br />
                with users free of <br />
                charge for 3 months
              </h1>
              <p>
                Discover.App gives you a cheaper way to get your apps and games
                noticed by <br />
                users. Just sign up with Discover.App, upload your video
                previews and get users <br />
                into your app or game cheaply and easily. Enjoy the fruits of
                your labour!
              </p>
              <div
                onClick={() => {
                  setShowModal(true);
                }}
                className={styles.herobtn}
              >
                Sign Up
              </div>
            </div>

            <img className={styles.heroimg} src="hero1.png" alt="hero" />
          </section>
        </Carousel>
      </main>

      <section className={styles.hero2}>
        <div className={styles.hero2content}>
          <div className={styles.textimg}>
            <img src="icon2.png" alt="hero" className={styles.icons2} />
            <h1>Post & Acquire Users</h1>
            <img src="icons.png" alt="hero" className={styles.icons23} />
          </div>
          <p>
            Post 15 seconds preview videos of your app or game and start
            exploding on the AppStore, PlayStore or <br />
            Amazon Store with downloads & reviews
          </p>
        </div>

        {width <= 600 ? (
          <div className={styles.hero2imgs}>
            <img className={styles.herom} src="herom.png" alt="hero" />
          </div>
        ) : (
          <div className={styles.hero2imgs}>
            <img
              data-aos="fade-up"
              // data-aos-delay="100"
              className={styles.heroleft}
              src="heroleft.png"
              alt="hero"
            />
            <img className={styles.herom} src="herom.png" alt="hero" />
            <img
              data-aos="fade-up"
              // data-aos-delay="100"
              className={styles.heroright}
              src="heroright.png"
              alt="hero"
            />
          </div>
        )}
      </section>

      <section className={styles.hero3}>
        <div className={styles.hero3content}>
          {width <= 600 ? (
            <h1>Get more exposure & downloads with our interactive feed</h1>
          ) : (
            <h1>
              Get more exposure <br />
              & downloads with <br />
              our interactive feed
            </h1>
          )}
          <div
            onClick={() => {
              setShowModal(true);
            }}
            className={styles.hero3btn}
          >
            Sign Up
          </div>
        </div>
      </section>

      <section className={styles.hero4}>
        <div className={styles.hero4content}>
          {width <= 600 ? (
            <h1>Marketing your apps & games made easy and cheap</h1>
          ) : (
            <h1>
              Marketing your
              <br />
              apps & games made <br />
              easy and cheap
            </h1>
          )}
        </div>
      </section>

      <Footer />

      <Modal
        show={showModal}
        onclose={() => {
          setShowModal(false);
        }}
        type={1}
      />
    </div>
  );
}
