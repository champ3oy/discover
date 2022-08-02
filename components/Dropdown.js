import styles from "../styles/Modal.module.scss";
import React from "react";

export default function Dropdown({ label, placeholder, onChange, value }) {
  return (
    <div className={styles.inputcon}>
      <label>{label}</label>
      <select defaultValue={placeholder} name="cars" id="cars">
        <option value="Option 1">Option 1</option>
      </select>
    </div>
  );
}
