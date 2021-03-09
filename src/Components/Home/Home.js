import React from 'react';
import { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Country length: {countries.length}</h1>
            <Container>
                <Row>
                    {
                        countries.map(country => (
                            <Col xs={6} md={4}>
                                <Country country={country}></Country>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;