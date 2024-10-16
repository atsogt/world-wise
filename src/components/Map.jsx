import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}>
      Map
      <h1>Lat: {lat}</h1>
      <h1>Lng: {lng}</h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 50, lng: 25 });
        }}>
        Change pos
      </button>
    </div>
  );
}
