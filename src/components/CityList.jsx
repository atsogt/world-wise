import React, { useEffect, useState } from "react"
import Spinner from "./Spinner"
import styles from "./CityList.module.css"
import CityItem from "./CityItem"
import Message from "./Message"
import { CitiesProvider, useCities } from "../contexts/CitiesContext"

export default function CityList() {
  const { cities, isLoading } = useCities()

  if (isLoading) {
    return <Spinner />
  }

  if (!cities.length) {
    return (
      <Message message='Add your first city by clicking on your city on the map' />
    )
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}
