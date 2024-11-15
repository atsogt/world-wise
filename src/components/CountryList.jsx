import React, { useEffect, useState } from "react"
import Spinner from "./Spinner"
import styles from "./CountryList.module.css"
import CityItem from "./CityItem"
import Message from "./Message"
import CountryItem from "./CountryItem"
import { useCities } from "../contexts/CitiesContext"

export default function CountryList() {
  const { cities, isLoading } = useCities()

  if (isLoading) {
    return <Spinner />
  }

  if (!cities.length) {
    return (
      <Message message='Add your first country by clicking on your country on the map' />
    )
  }

  console.log(cities)

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }]
    } else {
      return acc
    }
  }, [])
  // const countries = [];

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  )
}
