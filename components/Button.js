import styles from "../styles/Modal.module.scss";
import React from "react";

export default function Button({ text, onPress = () => {}, active = false }) {
  return (
    <div
      onClick={onPress}
      className={active ? styles.modalbtn2 : styles.modalbtn3}
    >
      {text}
    </div>
  );
}
