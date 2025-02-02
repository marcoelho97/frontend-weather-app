import { useContext } from "react";
import Table from 'react-bootstrap/Table';
import { WeatherContext } from "../../context/WeatherContext";

const WeatherDataTable = () => {

    const { weatherData } = useContext(WeatherContext);

    return (
        <Table striped bordered hover className="mb-5 text-center">
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
                    <td>
                        { data.temperature != null
                            ? (`${data.temperature} ºC`)
                            : "N/A"
                        }
                        
                    </td>
                    <td>
                        { data.precipitation != null
                            ? (`${data.precipitation} %`)
                            : "N/A"
                        }
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default WeatherDataTable;