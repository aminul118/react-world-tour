import { useState } from "react";
import "./Country.css";

export default function Country({ country, handleVisitedCountries }) {
  const { name, flags, population, area, cca3 } = country;
  //   console.log(country);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : ""}`}>
      <h4>Country : {name.common} </h4>
      <h5>Flag</h5>
      <img src={flags.png} alt="" />
      <h5>Population : {population}</h5>
      <h5>Area : {area}</h5>
      <h5>Code : {cca3}</h5>
      <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>{" "}
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {/* {visited ? "Visited" : "Going"} */}
    </div>
  );
}
