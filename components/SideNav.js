import styles from "../styles/SideNav.module.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

export default function SideNav({ open, onclose = () => {} }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (open) {
      document.getElementById("nav").style.top = 0;
    } else {
      document.getElementById("nav").style.top = "-100vh";
    }

    console.log(open);
  }, [open]);

  return (
    <div id="nav" className={styles.con}>
      <div className={styles.nav}>
        <div className={styles.navleft}>
          <img className={styles.logo} src="logob.png" alt="logo" />
        </div>

        <div onClick={onclose} className={styles.navright}>
          <img className={styles.menu} src="x2.png" alt="menu" />
        </div>
      </div>

      <Link href={"/developers"}>
        <div className={styles.nav2}>
          <h1>Developer & Publishers</h1>

          <div className={styles.navright}>
            <img className={styles.menu} src="arr.png" alt="menu" />
          </div>
        </div>
      </Link>
      <Link href={"/consumer"}>
        <div className={styles.nav2}>
          <h1>Consumers & Superfans</h1>

          <div className={styles.navright}>
            <img className={styles.menu} src="arr.png" alt="menu" />
          </div>
        </div>
      </Link>
      <Link href={"/creators"}>
        <div className={styles.nav2}>
          <h1>Creators & Influencers</h1>

          <div className={styles.navright}>
            <img className={styles.menu} src="arr.png" alt="menu" />
          </div>
        </div>
      </Link>

      <div
        onClick={() => {
          setShowModal(true);
        }}
        className={styles.nav3}
      >
        <h1>Join Us</h1>

        <div className={styles.navright}>
          <img className={styles.menu} src="arr.png" alt="menu" />
        </div>
      </div>

      <Modal
        show={showModal}
        onclose={() => {
          setShowModal(false);
        }}
        type={3}
      />
    </div>
  );
}
