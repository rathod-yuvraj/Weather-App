import React from 'react'
import './WeatherApp.css '

import search_icon from "../Assests/search.png";
import drizzle_icon from "../Assests/drizzle.png";
import rain_icon from "../Assests/rain.png";
import snow_icon from "../Assests/snow.png";
import wind_icon from "../Assests/wind.png";
import clound_icon from "../Assests/clound.png";
import clear_icon from "../Assests/clear.png";
import humidity_icon from "../Assests/humidity.png";

const WeatherApp = () => {
  return (
        <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search' />
            <div className="search-icon">
                <img src={search_icon} alt="search" />
            </div>
        </div>
        <div className="weather-image">
            <img src={clear_icon} alt="" />

        </div>
        <div className="weather-temp">24</div>
        
    </div>

        
      
   
  )
}

export default WeatherApp
