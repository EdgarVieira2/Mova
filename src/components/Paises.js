import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const url = 'https://restcountries.eu/rest/v2/all'

const Paises = () =>{
  const [ countries, setCountries] = useState([])

  const fetchCountriesData = async()=>{
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    
  }
  useEffect(() =>{
    fetchCountriesData()
    
  },[])

  return(
    <>
    <section className='grid'>
  
    {countries.map((country) =>{
      const {numericCode,name,population,region, capital , flag } = country

      return(
        <article key={numericCode}>
           <div>
           <Link to={`/paises/${name}`} className='btn'><img src={flag} alt={name}></img></Link>
             <h3 className='country-name'>{name}</h3>
             <h4>Population: <span>{population}</span></h4>
             <h4>Region: <span>{region}</span></h4>
             <h4>Capital: <span>{capital}</span></h4>
            
             
            </div>
           </article>
      )
    })}
    </section>
    

    </>
  )
}
export default Paises