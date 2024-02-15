import React from 'react'

import './WeatherApp.css'
import search_icon from "../Assets/search.png"
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import clound_icon from "../Compontents/Assets/clound.png";
import clear_icon from "../Assets/clear.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherApp = () => {
    let API_KEY= "0a4aa3e922d90ae4909ad2c58909b029" ;
    const search=()=>{
        

    }

  return (
        <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="search" />
            </div>
        </div>
        <div className="weather-image">
            <img src={clear_icon} alt="" />

        </div>
        <div className="weather-temp">24 c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt=""  className='icon'/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>

                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt=""  className='icon'/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Wind Speed</div>

                </div>
            </div>
        </div>
        
    </div>

    
      
   
  )
}

export default WeatherApp
