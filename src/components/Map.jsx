import React from "react"
import styles from "./Map.module.css"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "https://cdn.esm.sh/react-leaflet"

export default function Map() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [mapPosition, setMapPosition] = useState([50, 20])

  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form")
      }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      Map
      <h1>Lat: {lat}</h1>
      <h1>Lng: {lng}</h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 50, lng: 25 })
        }}>
        Change pos
      </button>
    </div>
  )
}
