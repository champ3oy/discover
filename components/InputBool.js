import styles from "../styles/Modal.module.scss";
import React from "react";

export default function InputBool({ label, placeholder, onChange, value }) {
  return (
    <div className={styles.inputcon}>
      <label>{label}</label>

      <div className={styles.inputbool}>
        <div>Yes</div>
        <div>No</div>
      </div>
    </div>
  );
}
