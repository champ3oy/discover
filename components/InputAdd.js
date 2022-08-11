import styles from "../styles/Modal.module.scss";
import React from "react";

export default function InputAdd({
  label,
  placeholder,
  onChange,
  value,
  onAdd,
  list = [],
  onRemove,
}) {
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

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
        <div onClick={onAdd}>Add</div>
      </div>

      <div className={styles.inputaddlist}>
        {list.map((item, index) => {
          return (
            <div key={index}>
              {truncateString(item, 20)}
              <img onClick={() => onRemove(index)} src="/xw.png" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
