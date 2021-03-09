import React from 'react';
import { Link } from 'react-router-dom';



const Country = (props) => {
    const { name, alpha3Code, flag } = props.country;

    const imageStyle = {
        width: '200px'
    }
    const countryStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h3>Name: {name}</h3>
            <p>Alpha Code: {alpha3Code}</p>
            <img style={imageStyle} src={flag} alt="" />
            <p> <Link to={`/country/${name}`}>
                  <button>Show details of {name}</button>
            </Link></p>
        </div>
    );
};

export default Country;