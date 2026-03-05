import ForecastCard from "./ForecastCard";

export default function DailyForecast({ list }) {
    const days = {};

    list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!days[date]) days[date] = item;
    });

    return (
        <div className="daily">
            {Object.values(days).slice(1, 5).map((day, i) => (
                <ForecastCard key={i} day={day} />
            ))}
        </div>
    );
}
