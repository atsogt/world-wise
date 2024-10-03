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

  const countries = cities.reduce((arr, city) => {
    // if(arr.map(el => el.city).includes(city.country))
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CityItem key={county} country={country.id} />
      ))}
    </ul>
  );
}
