import styles from "../styles/Home.module.scss";

import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import Modal from "./Modal";

export default function Footer() {
  const router = useRouter();
  const [width, setwidth] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [email, setemail] = useState("");

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
        {router.pathname === "/" ? (
          <h1>
            The first reward powered video discovery <br />
            platform & community for everyone. <br />
            <span className={styles.yellow}>Join Us!</span>
          </h1>
        ) : router.pathname === "/developers" ? (
          <h1>
            Your user acquisition <br />
            strategy starts with
            <span className={styles.yellow}>
              Discover.App <br />
              Join us!
            </span>
          </h1>
        ) : router.pathname === "/consumer" ? (
          <h1>
            Keep your pulse on all great <br />
            apps & games on the AppStore and <br />
            PlayStore with{" "}
            <span className={styles.yellow}>
              Discover.App <br />
              Join us!
            </span>
          </h1>
        ) : router.pathname === "/creators" ? (
          <h1>
            Drive eyeballs to your social media
            <br />
            channels with <span className={styles.yellow}>Discover.App</span>.
            Kickstart your <br />
            creator journey the right way!{" "}
            <span className={styles.yellow}>Join Us</span>
          </h1>
        ) : null}

        <div className={styles.input}>
          <input
            onChange={(e) => {
              setemail(e.target.value);
              console.log("type", email);
            }}
            type="text"
            placeholder="Enter your email"
          />
          <div
            onClick={() => {
              setemail(email);
              setShowModal(true);
            }}
            className={styles.footerbtn}
          >
            {["/", "/developers"].includes(router.pathname)
              ? "Sign Up"
              : "Get Early Access"}
          </div>
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

            <div className={styles.fnavlinks}>
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

      {showModal ? (
        <Modal
          show={showModal}
          onclose={() => {
            setShowModal(false);
          }}
          type={
            router.pathname === "/"
              ? 4
              : router.pathname === "/developers"
              ? 1
              : router.pathname === "/consumer"
              ? 2
              : router.pathname === "/creators"
              ? 3
              : null
          }
          email={email}
        />
      ) : null}
    </footer>
  );
}
