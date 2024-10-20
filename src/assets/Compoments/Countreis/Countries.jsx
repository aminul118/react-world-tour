import { useEffect } from "react";
import { useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));

    return () => {};
  }, []);

  const handleVisitedCountries = (country) => {
    console.log(country);
    console.log("Add visited bro");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    // console.log(country);
  };

  return (
    <div>
      <h4>Numbers of Countries : {countries.length}</h4>
      <div>
        <h5>Visited Countries : {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
}
