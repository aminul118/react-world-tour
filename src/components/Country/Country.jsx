import { useState } from "react";
import "./Country.css";
export default function Country({ country, handleVisitedCountry }) {
  const { name, flags, population, area, cca3 } = country;
  console.log(country);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);

    // console.log("clicked");
    console.log(handleVisitedCountry);
  };
  //   const passWithParams = () => {
  //     handleVisitedCountry(country);
  //   };
  return (
    <div className={`country  ${visited && "visited"}`}>
      <h4>{name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>{" "}
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited && "I have visited this country"}
    </div>
  );
}
