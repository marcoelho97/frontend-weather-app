import React, { createContext, useState } from "react";
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async (location, startDate, endDate) => {
        try {
            const response = await axios.get('http://localhost:10524/weather/historical',
                {
                    // These params' names might be wrong
                    params: {
                        location: location,
                        start_date: startDate,
                        end_date: endDate
                    }
                }
            )
            //const data = await response.json();
            console.log(response.data);
            setWeatherData(response.data);
        } catch (error) {
            console.error("Error fetching: ", error);
        }
    }

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData, fetchWeatherData }}>
            {children}
        </WeatherContext.Provider>
    );
};