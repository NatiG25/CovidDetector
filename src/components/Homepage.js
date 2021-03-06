import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Homepage.css';
import { fetchRegions } from '../redux/Regions/regions';
import arrowRegion from '../images/rigth-arrow.png';
import earth from '../images/earth.png';
import europe from '../images/europe.png';

const Homepage = () => {
  const countries = useSelector((state) => state.countries);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleRegions = (country) => {
    dispatch(fetchRegions(country));
  };

  const varFilter = countries
    .filter((item) => item.country !== undefined && item.country.includes(filter));

  return (
    <>
      <input
        name="country"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
        className="input"
      />
      <div className="mainHeader">
        <img src={earth} alt="earth" />
        <h1>Global Cases</h1>
      </div>
      <p className="subHeader">STATS BY COUNTRY</p>
      <ul className="countryList">
        {countries.length === 0
          ? 'no result'
          : varFilter
            .map((country) => (
              <li key={country.country} className="listItem">
                <Link to="detail" onClick={() => handleRegions(country.country)}>
                  <img className="arrowRegion" src={arrowRegion} alt="right-arrow" />
                </Link>
                <img className="europeIMG" src={europe} alt="europe" />
                <a href=".">{country.country}</a>
                <p>{country.confirmed}</p>
              </li>
            ))}
      </ul>
    </>
  );
};

export default Homepage;
