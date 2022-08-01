import { MOSCOW_ID, SPB_ID } from "constants/weatherConstants";

import TemperatureTableContainer from "components/containers/TemperatureTableContainer";

const App = () => (
  <div className="App">
    <TemperatureTableContainer cityIds={[MOSCOW_ID, SPB_ID]} />
  </div>
);

export default App;
