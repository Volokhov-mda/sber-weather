import {
  kelvinToCelcius,
  kelvinToFahrenheit,
} from "helpers/temperatureFunctions";

import Temperature from "components/ui/Temperature";

const TemperatureTable = ({ weatherInfo, onFetch, ...props }) => (
  <div {...props}>
    {weatherInfo &&
      weatherInfo.map((weather, i) => (
        <Temperature
          city={weather.name}
          temperatureC={kelvinToCelcius(weather.main.temp)}
          temperatureF={kelvinToFahrenheit(weather.main.temp)}
          key={i}
        />
      ))}

    <button onClick={onFetch}>Get weather!</button>
  </div>
);

export default TemperatureTable;
