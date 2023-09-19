import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState();


  const fetchData = async (city, lang) => {
    try {
      const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes&lang=${lang}`);
      setWeather(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const values = {
    weather,
    setWeather,
    fetchData,
  }

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
}




export const useWeather = () => {
  const value = useContext(WeatherContext);

  if (!value) {
    throw new Error(
      "You have to add the WeatherProvider to make it work"
    );
  }

  return value;
};