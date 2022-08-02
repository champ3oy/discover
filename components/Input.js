import styles from "../styles/Modal.module.scss";
import React from "react";

export default function Input({ label, placeholder, onChange, value }) {
  return (
    <div className={styles.inputcon}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        onChange={(value) => {
          onChange(value.target.value);
        }}
        value={value}
      />
    </div>
  );
}
