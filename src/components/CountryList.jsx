import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on your city on the map" />
    );
  }

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
