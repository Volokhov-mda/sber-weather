const KELVIN_CELCIUM_OFFSET = 273.15;

/**
 * Converts temperature from Kelvin to Celsius
 * @param {number} temperatureK - temperature in Kelvin
 * @returns temperature in Celsius
 */
export const kelvinToCelcius = (temperatureK) =>
(temperatureK - KELVIN_CELCIUM_OFFSET).toFixed(2);

/**
 * Converts temperature from Kelvin to Fahrenheit
 * @param {number} temperatureK - temperature in Kelvin
 * @returns temperature in Fahrenheit
 */
export const kelvinToFahrenheit = (temperatureK) =>
  (kelvinToCelcius(temperatureK) * (9 / 5) + 32).toFixed(2);
