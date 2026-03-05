export default function HourlyForecast({ list }) {
    return (
        <div className="hourly">
            <h2>Hourly Forecast</h2>
            <div className="hourly-list">
                {list.map((item, i) => (
                <div key={i} className="hour-card">
                    <p>{item.dt_txt.split(" ")[1].slice(0, 5)}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    />
                    <p>{Math.round(item.main.temp)}°</p>
                </div>
            ))}
            </div>
        </div>
    )
}