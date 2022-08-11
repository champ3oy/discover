import styles from "../styles/Modal.module.scss";
import React from "react";

export default function InputAdd({ label, placeholder, onChange, value }) {
  return (
    <div className={styles.inputcon}>
      <label>{label}</label>

      <div className={styles.inputadd}>
        <input
          placeholder={placeholder}
          onChange={(value) => {
            onChange(value.target.value);
          }}
          value={value}
        />
        <div>Add</div>
      </div>
    </div>
  );
}
