import './App.css';
import Card from './compenents/Card';
import Dropdown from './compenents/Dropdown';
import Lang from './compenents/Lang';
import { CityProvider } from './contexts/CityContext';
import { LangProvider } from './contexts/LangContext';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <div className="app">
      <LangProvider>
        <WeatherProvider>
          <CityProvider>
            <Dropdown/>
            <Card/>
            <Lang/>
          </CityProvider>
        </WeatherProvider>
      </LangProvider>
    </div>
  );
}

export default App;
