import styles from "./CountryItem.module.css";
import React from "react";

export default function CountryItem({ country }) {
  // const { emoji } = country;
  console.log(country);
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{country.emoji}</span>
      <h3 className={styles.name}>{country.country}</h3>
    </li>
  );
}
