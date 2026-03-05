export default function ForecastCard({ day }) {
    return (
        <div className="day-card">
            <p>{day.dt_txt.split(" ")[0]}</p>
            <div className="Weather-icon">
                <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} id="forecast-icon"
                />
                <p>{Math.round(day.main.temp)}°C</p>
            </div>
            <p>{day.weather[0].description}</p>
        </div>
    );
}
