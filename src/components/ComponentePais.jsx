import React, { useEffect,useState } from 'react'
import axios from 'axios'
import countryServices from '../services/countryServices'


const ComponentePais = () => {
  const[paises,setPaises] = useState([])
  const[showPaises,setShowPaises] = useState(true)

  useEffect(()=>{
    countryServices
    .getAllCountries()
    .then((response)=>{
      setPaises(response.data)
      console.log('hola')
    })
  },[])

  const changeCountryVisibility = () =>{
    setShowPaises(!showPaises)
  }
  
  return (
    <>
    <div className="divPais">
      <h1 className='h1Pais'>Países e Información</h1>
    <button className='btnPais' onClick={changeCountryVisibility}>Mostrar Países</button> 
    </div>
    <br/> <input className='inputPais' placeholder='Filtrar países...' />
    {showPaises && (
      <ul className='ulCountry'>
        {paises.map((pais, index) => (
          <li className='liCountry' key={index}>{pais.name.common},</li>
        ))}
      </ul>)}
    </>
   
)}




export default ComponentePais