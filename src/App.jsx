import { useState, useEffect } from "react";
import { getCurrentWeather, getForecast } from "./services/weatherService";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import "./styles/theme.css";

export default function App() {
  const [city, setCity] = useState("Tenkasi");
  const [inputCity, setInputCity] = useState("Tenkasi");
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  const searchWeather = async () => {
    const searchCity = inputCity.trim();
    if (!searchCity) return;
    
    try {
      setError("");
      const currentData = await getCurrentWeather(searchCity);
      const forecastData = await getForecast(searchCity);
      setCurrent(currentData);
      setForecast(forecastData);
      setCity(searchCity);
    } catch (err) {
      setError(err.message);
      setCurrent(null);
      setForecast(null);
    }
  };

  useEffect(() => {
    searchWeather();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!current || !forecast) {
    return null;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="location">{city}{current && current.sys?.country ? `, ${current.sys.country}` : ''}</div>
        <div className="header-right">
          <div className="datetime">{new Date().toLocaleString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })} | {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          <div className="controls">
            <button className="unit active">°C</button>
          </div>
        </div>
      </header>

      <SearchBar city={inputCity} setCity={setInputCity} onSearch={searchWeather} />

      <>
        <div className="top-section">
          <CurrentWeather data={current} />
          <HourlyForecast list={forecast.list.slice(0, 6)} />
        </div>
        <DailyForecast list={forecast.list} />
      </>
    </div>
  );
}
