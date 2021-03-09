import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    let {countryName} = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [countryName])

    const { name, capital, nativeName, population } = country;

    console.log(country);
    
    return (
        <div>
            <h3>Country details: {countryName}</h3>
            <h4>Name: {name}</h4>
            <p>Capital: {capital}</p>
            <p>Native name: {nativeName}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default CountryDetail;