import styles from "./CountryItem.module.css";
import React from "react";

export default function CountryItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
