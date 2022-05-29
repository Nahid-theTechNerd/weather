import React, { useEffect, useState } from "react";
import { getLocation } from "./location.js";
import "./Weather.css";

export default function Weather() {
  const location = getLocation();
  const key = "289cb41a6eb62961c7547c4778572cc2";
  //https://api.openweathermap.org/data/2.5/weather?lat=24.84&lon=89.37&appid=289cb41a6eb62961c7547c4778572cc2

  let [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${key}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, []);

  let [city, setCity] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
        "X-RapidAPI-Key": "59d1e1ef18msh6c45d5116ae7f90p1e52d3jsn94ecf2949405",
      },
    };
    fetch(
      `https://geocodeapi.p.rapidapi.com/GetTimezone?latitude=${location[0]}&longitude=${location[1]}`,
      options
    )
      .then((res) => res.json())
      .then((data) => setCity(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="weather__body">
      <section className="general__info">
        <div className="icon">
          <img src={`http://openweathermap.org/img/wn/${weather ? weather.weather[0].icon : ""}@2x.png`} alt="" />
        </div>
        <div className="weather__summary">
          <h2>{weather ? weather.main.temp : ""}&#8451;</h2>
          <h2>{weather ? weather.weather[0].main : ""}</h2>
          <h2>
            {weather ? weather.name : ""}
          </h2>
        </div>
      </section>
    </div>
  );
}
