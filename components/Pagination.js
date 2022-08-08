import styles from "../styles/Home.module.scss";
import React from "react";

export default function Pagination({ page, sliderRef }) {
  return (
    <>
      {page == 1 ? (
        <div className={styles.pagination}>
          <div className={styles.paginationitemA} />
          <div
            onClick={() => {
              sliderRef.current.next();
            }}
            className={styles.paginationitem}
          />
          <div
            onClick={() => {
              console.log(3);
            }}
            className={styles.paginationitem}
          />
        </div>
      ) : page == 2 ? (
        <div className={styles.pagination}>
          <div
            onClick={() => {
              sliderRef.current.previous();
            }}
            className={styles.paginationitem}
          />
          <div className={styles.paginationitemA} />
          <div
            onClick={() => {
              sliderRef.current.next();
            }}
            className={styles.paginationitem}
          />
        </div>
      ) : page == 3 ? (
        <div className={styles.pagination}>
          <div
            onClick={() => {
              sliderRef.current.goToSlide(2);
            }}
            className={styles.paginationitem}
          />
          <div
            onClick={() => {
              sliderRef.current.previous();
            }}
            className={styles.paginationitem}
          />
          <div className={styles.paginationitemA} />
        </div>
      ) : null}
    </>
  );
}
