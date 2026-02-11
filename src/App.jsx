import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";

function App() {
  // State management

  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // API Configuration
  const API_KEY = "ebb4c25f6edab333d4500c49d6337678";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  // Fetch weather function
  const fetchWeather = async (city) => {
    try {
      // will be used to update isLoading to true.
      setIsLoading(true);
      setError(null);
      


      // FETCHING THE DATA FROM EXTERNAL API.
      const response = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      const data = await response.json();
      setWeather(data);
      
      // eRRORS COMING FROM THE API
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="App">
      <NavBar />
      <div id="app-content">

        {/* pASSING DATA -> PROPS */}
        <WeatherData 
          weather={weather} 
          isLoading={isLoading} 
          error={error} 
        />
        <Search onSearch={fetchWeather} />
      </div>
    </div>
  );
}

export default App;