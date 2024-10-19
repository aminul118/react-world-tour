import './Country.css'
export default function Country({ country }) {
  const {name, flags, population, area, cca3} = country;
  console.log(country);
  return (
    <div className='country'>
        <h4>{name.common}</h4>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p><small>Code: {cca3}</small></p>
        <button>Visited</button>
    </div>
  )
}
