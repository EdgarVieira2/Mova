import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import '../country.css'

const Country = () =>{
    const [country,setCountry] = useState([])
    const {name} = useParams()

    useEffect(()=>{
        const fetchCountryData = async () =>{
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)

            const country = await response.json()
            setCountry(country)
            console.log(country)
        }
        fetchCountryData()
    },[])


    return(
        <div>
           
            <section className='country'>
            <Link to='/' className='btn btn-light'>
                <i className='fas fa-arrow-left'></i>Voltar
            </Link>
                {country.map((c)=> {
                    const{numericCode,flag,name,population,region ,subregion,capital,languages,borders} = c

                    return(
                        <article key={numericCode}>
                            <div className='flag'>
                                <img src={flag} alt={name}></img>
                            </div>
                            <div className='country-details'>
                                <h2>{name}</h2>
                                <h5>Capital: {capital}</h5>
                                <h5>Região: {region}</h5>
                                <h5>Sub-região: {subregion}</h5>
                                <h5>População: {population}</h5>
                                <h5>Linguas: {languages[0].name}</h5>
                                <div>
                                    <h3>Fronteiras: </h3>
                                    {borders.map((border)=>{
                                    return(
                                        <ul key={border}>
                                            <l1>{border}</l1>
                                        </ul>
                                    )
                                })}
                                </div>



                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Country