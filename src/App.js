import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
}

export default App;
