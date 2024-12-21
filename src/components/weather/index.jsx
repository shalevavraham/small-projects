import React, { useEffect, useState } from "react";
import Search from "./search";
import "./style.css"

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const data = await response.json();
      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-us', {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }) 
  }

  useEffect(() => {
    fetchWeatherData("israel");
  }, []);

  console.log(weatherData);

  return (
    <div className="WeatherApp">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">{weatherData && weatherData.Weather && weatherData.Weather[0] ? weatherData.Weather[0].description : ""}</p>
        <div className="weather-info">
            <div className="column">
                <div>
                    <p className="wind">{weatherData?.wind?.speed}</p>
                    <p>Wind Speed</p>
                </div>
            </div>
            <div className="column">
                <div>
                    <p className="humidity">{weatherData?.main?.humidity}</p>
                    <p>Humidity</p>
                </div>
            </div>

        </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
