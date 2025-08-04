"use client";

import { useEffect, useState } from "react";
import WeatherCard from "../weather/WeatherCard";
import { log } from "console";

export const cities = [
  { name: "London", lat: 51.5072, lon: -0.1276 },
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "Berlin", lat: 52.52, lon: 13.405 },
];

async function fetchWeather() {
  const results = await Promise.all(
    cities.map(async (city) => {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m&timezone=Europe/Kyiv`
      );
      const data = await res.json();
      return { name: city.name, ...data };
    })
  );
  return results;
}

const weather = await fetchWeather();

const Home = () => {
  return (
    <div className="w-full md: p-4 mx-auto">
      <div className="md:flex gap-4">
        {weather.map((city, i) => {
          const maxTemps = Math.max(...city.daily.temperature_2m_max);
          const minTemps = Math.min(...city.daily.temperature_2m_min);
          return (
            <WeatherCard
              curr={city.current_weather}
              nameCity={city.name}
              key={i}
              min={minTemps}
              max={maxTemps}
            ></WeatherCard>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
