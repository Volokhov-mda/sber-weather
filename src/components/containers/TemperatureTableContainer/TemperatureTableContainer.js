import { useState } from "react";

import { API_KEY } from "constants/weatherConstants";

import TemperatureTable from "components/ui/TemperatureTable";

function TemperatureTableContainer({ cityIds, ...props }) {
  const [weatherInfo, setWeatherInfo] = useState([]);

  const fetchCityWeather = async () => {
    const newWeatherInfo = [];

    for (const cityId of cityIds) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          newWeatherInfo.push(data);
        })
        .catch((error) => alert(`Failed to fetch weather: "${error}"`));
    }

    setWeatherInfo(newWeatherInfo);
  };

  return (
    <TemperatureTable
      weatherInfo={weatherInfo}
      onFetch={fetchCityWeather}
      {...props}
    />
  );
}

export default TemperatureTableContainer;
