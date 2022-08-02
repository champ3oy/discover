import styles from "../styles/Modal.module.scss";
import React from "react";

export default function Button({ text, onPress = () => {} }) {
  return (
    <div onClick={onPress} className={styles.modalbtn2}>
      {text}
    </div>
  );
}
