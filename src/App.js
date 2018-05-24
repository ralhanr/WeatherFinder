import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Countries from './components/Countries';
import './App.css';


const API_KEY = "b773d0757c676a0b115703a91b1440ca";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    if(e.target.elements.city.value === "" || e.target.elements.country.value === "") {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "You need to enter a city and a country."});
    //  alert("Enter a city and country!");
      return;
    }
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error: ""
    })

  }
  render() {
  return (
    <div>
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row"></div>
          <div className="col-xs-5 title-ontainer">
          <Titles />
          </div>
          <div className="col-xs-7 form-container">
          <Form getWeather = {this.getWeather}/>
          <Weather
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
          />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
  }
}



export default App;
