import styles from "../styles/Modal.module.scss";
import React from "react";
import DevModal from "./DevModal";
import ConModal from "./ConModal";
import CreModal from "./CreModal";

export default function Modal({
  show = false,
  onclose = () => {},
  onsubmit = () => {},
  type = 1,
}) {
  const [active, setActive] = React.useState(type);

  return (
    <div
      style={{
        display: show ? "flex" : "none",
      }}
      className={styles.modalcon}
    >
      <div className={styles.modal}>
        <img onClick={onclose} src="/x.png" className={styles.x} />
        <div className={styles.modalheader}>
          <div
            onClick={() => {
              setActive(1);
            }}
            style={
              active == 1
                ? {
                    backgroundColor: "#FFFD2E",
                    color: "black",
                  }
                : null
            }
            className={styles.modalbtn}
          >
            Developers & Publishers
          </div>
          <div
            onClick={() => {
              setActive(2);
            }}
            style={
              active == 2
                ? {
                    backgroundColor: "#FFFD2E",
                    color: "black",
                  }
                : null
            }
            className={styles.modalbtn}
          >
            Consumer
          </div>
          <div
            onClick={() => {
              setActive(3);
            }}
            style={
              active == 3
                ? {
                    backgroundColor: "#FFFD2E",
                    color: "black",
                  }
                : null
            }
            className={styles.modalbtn}
          >
            Creators & Influencers
          </div>
        </div>

        {active === 1 ? <DevModal /> : null}
        {active === 2 ? <ConModal /> : null}
        {active === 3 ? <CreModal /> : null}
      </div>
    </div>
  );
}
