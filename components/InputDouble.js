import styles from "../styles/Modal.module.scss";
import React from "react";

export default function InputDouble({
  label,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  onChange1,
  onChange2,
  onChange3,
  onChange4,
  value,
  prefix = false,
  type,
}) {
  return (
    <div className={styles.inputcon}>
      <label>{label}</label>
      {/* <div className={styles.inputgroup}>
        <input
          placeholder={placeholder}
          onChange={(value) => {
            // onChange(value.target.value);
          }}
          // value={value}
          type={type}
        />
      </div> */}
      <div className={styles.inputbool}>
        <div className={styles.inputgroup}>
          <input
            placeholder={placeholder1}
            onChange={(value) => {
              onChange1(value.target.value);
            }}
            value={value}
            type={type}
          />
        </div>
        <div className={styles.inputgroup}>
          <input
            placeholder={placeholder2}
            onChange={(value) => {
              onChange2(value.target.value);
            }}
            value={value}
            type={type}
          />
        </div>
      </div>
      <div className={styles.spacer} />
      <div className={styles.inputbool}>
        <div className={styles.inputgroup}>
          <input
            placeholder={placeholder3}
            onChange={(value) => {
              onChange3(value.target.value);
            }}
            value={value}
            type={type}
          />
        </div>
        <div className={styles.inputgroup}>
          <input
            placeholder={placeholder4}
            onChange={(value) => {
              onChange4(value.target.value);
            }}
            value={value}
            type={type}
          />
        </div>
      </div>
    </div>
  );
}
