import { useContext, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const WeatherApp = () => {

    const [location, setLocation] = useState("Lisbon");
    const [dataLocation, setDataLocation] = useState("");
    const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
    const [endDate, setEndDate] = useState(new Date().toISOString().split("T")[0]);
    const { weatherData, setWeatherData, fetchWeatherData } = useContext(WeatherContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear data related to old search
        setWeatherData(null);

        fetchWeatherData(location, startDate, endDate);
        setDataLocation(location);
    };

    return (

        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} 
                    />
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)} 
                    />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)} 
                    />
                <button type="submit">
                    Check weather
                </button>
            </form>
            { weatherData && !weatherData?.error && (
                <div>
                    <h2>Weather Data for {dataLocation}</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Average temperature (°C)</th>
                            <th>Precipitation (%)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {weatherData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.date}</td>
                                <td>{data.temperature}</td>
                                <td>{data.precipitation}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="temperature" fill="#8884d8" name="Temperature (°C)" />
                            <Bar dataKey="precipitation" fill="#82ca9d" name="Precipitation (%)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>

    );

};

export default WeatherApp;