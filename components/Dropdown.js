import styles from "../styles/Modal.module.scss";
import React from "react";
import CountryList from "../components/countries";

export default function Dropdown({
  label,
  placeholder,
  onChange,
  value,
  country = false,
  data = [],
}) {
  if (country) {
    return (
      <div className={styles.inputcon}>
        <label>{label}</label>
        <select
          onChange={(e) => {
            onChange(e.target.value);
          }}
          required
        >
          <option hidden value="" disabled selected>
            {placeholder}
          </option>
          {CountryList.map((item) => {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  return (
    <div className={styles.inputcon}>
      <label>{label}</label>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        required
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {data.map((item) => {
          return (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
