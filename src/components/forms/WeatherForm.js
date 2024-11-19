import { useContext, useState, useEffect, useCallback, useRef } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { WeatherContext } from "../../context/WeatherContext";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const WeatherForm = () => {

    const { weatherData, setWeatherData, fetchWeatherData, setDataLocation } = useContext(WeatherContext);

    const [location, setLocation] = useState("Lisbon");
    const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
    const [endDate, setEndDate] = useState(new Date().toISOString().split("T")[0]);
    const [error, setError] = useState("");

    // const [errorTimeout, setErrorTimeout] = useState();
    const errorTimeoutRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (new Date(startDate) > new Date(endDate)) {
            handleSetError("Start date cannot be later than end date");
            return;
        }
        setError("")

        // Clear data related to old search
        setWeatherData(null);

        fetchWeatherData(location, startDate, endDate);
        setDataLocation(location);
    };

    // Show error for 5 seconds
    const handleSetError = useCallback((message) => {
        setError(message);
        if (errorTimeoutRef?.current) {
            clearTimeout(errorTimeoutRef.current);
        }
        errorTimeoutRef.current = setTimeout(() => {
                setError("")
            }, 5000);
    }, [])

    useEffect(() => {
        if( weatherData?.error) {
            handleSetError(weatherData?.error_message)
        }
    }, [weatherData, handleSetError])

    return (

        <form onSubmit={handleSubmit} className="mb-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} 
                />
            </Form.Group>
            <Row>
                <Col md="6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Start Date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)} 
                            />
                    </Form.Group>
                </Col>
                <Col md="6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="End Date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)} 
                            />
                    </Form.Group>
                </Col>
                { error && 
                    <Col className="alert alert-danger">
                        { error }
                    </Col>
                }
            </Row>
            <Button type="submit">                    
                Check weather
            </Button>
        </form>
    );
}

export default WeatherForm;