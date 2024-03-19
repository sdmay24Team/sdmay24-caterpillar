import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import "./Dashboard.css";

export const Dashboard = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          fetchWeatherData(latitude, longitude);
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    const API_KEY = '885e2c6d5735a75cb18a715790228ca2';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="container1">
      <NavBar />
      <div>
        <div className="dashtext">Welcome!</div>
        {currentLocation && (
          <div className="map-container">
            <iframe
              title="Google Maps"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyC-btxanr6tvRiBmupjqSGFsfIi_rqgkbA&center=${currentLocation.lat},${currentLocation.lng}&zoom=15`}
              allowFullScreen
            />
          </div>
        )}
        {weather && weather.main && (
          <div className="weather-container">
            <h2>Current Weather</h2>
            <p><b>Temperature:</b> {weather.main.temp}°F</p>
            <p><b>Weather Description:</b> {weather.weather[0].description}</p>
            {/* You can display more weather information here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
