import "./Countries.css";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

export default function Countries() {
  const [Countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries , country]
    setVisitedCountries(newVisitedCountries)
    console.log(country);
  };

  return (
    <div>
      <h4>Countries : {Countries.length}</h4>
      <div>
        <h5>Visited Countries : {visitedCountries.length}</h5>
        <ul></ul>
      </div>
      <div className="country-container">
        {Countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
}
