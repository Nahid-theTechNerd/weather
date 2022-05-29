import React, { useEffect, useState } from "react";
import { getLocation } from "./location.js";
import './Weather.css';

export default function Weather() {
  const location = getLocation();
  console.log("Location " + location);
  const key = "289cb41a6eb62961c7547c4778572cc2";
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="weather__body">

    </div>
    );
}
