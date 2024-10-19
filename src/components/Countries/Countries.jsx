import "./Countries.css";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

export default function Countries() {
  const [Countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h4>Countries : {Countries.length}</h4>
      <div className="country-container">
        {Countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
}
