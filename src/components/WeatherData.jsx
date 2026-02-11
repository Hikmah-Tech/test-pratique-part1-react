function WeatherData({ weather, isLoading, error }) {
  // Loading state
  if (isLoading) {
    return (
      <div id="weather-container">
        <div id="weather-details">
          <h1>--</h1>
          <h2>Loading...</h2>
          <h3 className="description">fetching data</h3>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div id="weather-container">
        <div id="weather-details">
          <h1>!--</h1>
          <h2>Error</h2>
          <h3 className="description">{error}</h3>
        </div>
      </div>
    );
  }

  // No data yet (initial state)
  if (!weather) {
    return (
      <div id="weather-container">
        <div id="weather-details">
          <h1>--</h1>
          <h2>-- °c</h2>
          <h3 className="description">Search for a city</h3>
        </div>
      </div>
    );
  }

  // ✅ DATA RENDER - Real weather data
  return (
    <div id="weather-container">
      <img 
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
        alt={weather.weather[0].description} 
      />
      <div id="weather-details">
        <h1>{Math.round(weather.main.temp)}°c</h1>
        <h2>{weather.name}</h2>
        <h3 className="description">{weather.weather[0].description}</h3>
        <p>Feels like: {Math.round(weather.feels_like)}°c | Humidity: {weather.main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherData;