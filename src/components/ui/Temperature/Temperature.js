const Temperature = ({ city, temperatureC, temperatureF, ...props }) => (
  <div {...props}>
    {city} {temperatureC} {temperatureF}
  </div>
);

export default Temperature;
