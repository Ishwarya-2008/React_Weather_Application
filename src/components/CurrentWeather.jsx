export default function CurrentWeather({ data }) {
    const icon = data.weather[0].icon;
    console.log(icon);
    const precip = data.rain?.['1h'] ?? data.rain?.['3h'] ?? 0;

    return (
        <div className="card current">
            <div className="current-left">
                <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="icon" style={{ width: '100px', height: '100px' }} />
                <p className="description">{data.weather[0].description}</p>
                <p className="precip">Precipitation: {Math.round(precip * 100) / 100}%</p>
            </div>

            <div className="current-center current-text">
                <h1>{Math.round(data.main.temp)}°</h1>
            </div>

            <div className="meta">
                <p>RealFeel {Math.round(data.main.feels_like)}°</p>
                <p>Humidity {data.main.humidity}%</p>
                <div className="meta-icons">
                    <button className="meta-btn"><i class="fa-solid fa-droplet" style={{ fontSize: '28px' }}></i></button>
                    <button className="meta-btn"><i class="fa-solid fa-temperature-half" style={{ fontSize: '28px' }}></i></button>
                </div>
            </div>
        </div>
    );
}
