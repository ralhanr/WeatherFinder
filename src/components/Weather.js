import React from 'react';

const Weather = (props) => {
    const {temperature, city, country, humidity, description, error} = props;
  return (
    <div className = "weather__info">
   {city && country && <h1> The current temperature in {city}, {country} is {temperature}. <hr /> The conditions are {description}.</h1>}
   {humidity && <h1> The current humidity is {humidity}. </h1>}
   {error && <h1> Please enter a city and a country to find local weather.</h1>}
    </div>

  )
}

export default Weather;
