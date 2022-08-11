import styles from "../styles/Modal.module.scss";
import React from "react";

export default function Input({
  label,
  placeholder,
  onChange,
  value,
  prefix = false,
  type,
}) {
  return (
    <div className={styles.inputcon}>
      <label>{label}</label>
      <div className={styles.inputgroup}>
        {prefix && <h1>{prefix}</h1>}
        <input
          placeholder={placeholder}
          onChange={(value) => {
            onChange(value.target.value);
          }}
          value={value}
          type={type}
        />
      </div>
    </div>
  );
}
