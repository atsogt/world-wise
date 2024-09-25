import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";

//routes <-- client-side routing
// /
// /login
// /app

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch {
        alert("There was an error loading this data...");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List of Cities</p>} />
          <Route
            path="cities"
            element={
              <CityList cities={cities} isLoading={isLoading} />
            }></Route>
          <Route
            path="countries"
            element={
              <CityList cities={cities} isLoading={isLoading} />
            }></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
