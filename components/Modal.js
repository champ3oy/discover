import styles from "../styles/Modal.module.scss";
import React, { useEffect } from "react";
import DevModal from "./DevModal";
import ConModal from "./ConModal";
import CreModal from "./CreModal";

export default function Modal({
  show = false,
  onclose = () => {},
  onsubmit = () => {},
  type = 1,
  email = null,
}) {
  const [active, setActive] = React.useState(type);

  useEffect(() => {
    if (type == 4) {
      setActive(1);
    }
  }, [type]);

  return (
    <div
      style={{
        display: show ? "flex" : "none",
      }}
      className={styles.modalcon}
    >
      <div className={styles.modal}>
        <img onClick={onclose} src="/x.png" className={styles.x} />
        <div
          style={{
            backgroundColor: active == 4 ? "#f5f5f5" : "#fff",
          }}
          className={styles.modalheader}
        >
          <div
            onClick={() => {
              setActive(1);
            }}
            style={
              active == 1
                ? {
                    backgroundColor: "#000",
                    color: "#FFFD2E",
                    display: "flex",
                  }
                : {
                    display: type == 4 ? "flex" : "none",
                    color: "#000",
                  }
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
                    backgroundColor: "#000",
                    color: "#FFFD2E",
                    display: "flex",
                  }
                : {
                    display: type == 4 ? "flex" : "none",
                    color: "#000",
                  }
            }
            className={styles.modalbtn}
          >
            Consumer & Superfan
          </div>
          <div
            onClick={() => {
              setActive(3);
            }}
            style={
              active == 3
                ? {
                    backgroundColor: "#000",
                    color: "#FFFD2E",
                    display: "flex",
                  }
                : {
                    display: type == 4 ? "flex" : "none",
                    color: "#000",
                  }
            }
            className={styles.modalbtn}
          >
            Creators & Influencers
          </div>
        </div>

        {active === 1 ? <DevModal onclose={onclose} temail={email} /> : null}
        {active === 2 ? <ConModal onclose={onclose} temail={email} /> : null}
        {active === 3 ? <CreModal onclose={onclose} temail={email} /> : null}
      </div>
    </div>
  );
}
