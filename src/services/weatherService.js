const API_KEY = "c04dab1debc0f3c8515a011ed365ed06";

export const getCurrentWeather = async (city) =>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    if(!res.ok){
        throw new Error("City not found");
    }
    const data = await res.json();
    console.log(data);
    return data;
};

export const getForecast = async (city) =>{
    const res = await fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

    if(!res.ok){
        throw new Error("Forecast error");
    }

    const data = await res.json();
    console.log(data);
    return data;
};