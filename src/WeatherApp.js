import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import WeatherForm from "./components/forms/WeatherForm";
import WeatherDataTable from "./components/tables/WeatherDataTable";
import { WeatherContext } from "./context/WeatherContext";


const WeatherApp = () => {
    const { weatherData, dataLocation } = useContext(WeatherContext);

    return (
        <Container>
            <h1 className="mt-4 mb-5">Weather App</h1>
            <WeatherForm />

            { weatherData && !weatherData?.error && (
                <div className="mt-5">
                    <h2>Weather data for {dataLocation}</h2>

                    <WeatherDataTable />

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
        </Container>

    );

};

export default WeatherApp;