import styles from "../styles/Modal.module.scss";
import React, { useEffect } from "react";

export default function InputBool({
  label,
  placeholder,
  onChange,
  value = null,
}) {
  return (
    <div className={styles.inputcon}>
      <label>{label}</label>

      <div className={styles.inputbool}>
        <div
          onClick={() => {
            onChange("Yes");
          }}
          style={{
            backgroundColor: value == "Yes" ? "#000" : "#fff",
            color: value == "Yes" ? "#fff" : "#000",
          }}
        >
          Yes
        </div>
        <div
          onClick={() => {
            onChange("No");
          }}
          style={{
            backgroundColor: value == "No" ? "#000" : "#fff",
            color: value == "No" ? "#fff" : "#000",
          }}
        >
          No
        </div>
      </div>
    </div>
  );
}
