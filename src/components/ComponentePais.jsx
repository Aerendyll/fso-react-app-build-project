import React, { useEffect, useState } from "react";
import axios from "axios";
import countryServices from "../services/countryServices";

const ComponentePais = () => {
  const [paises, setPaises] = useState([]);
  const [showPaises, setShowPaises] = useState(true);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    countryServices.getAllCountries().then((response) => {
      setPaises(response.data);
    });
  }, []);

  const changeCountryVisibility = () => {
    setShowPaises(!showPaises);
  };

  const handleInputChange = (event) => {
    setBusqueda(event.target.value);
  };

  const showExtraInfo = () => {
    const paisesFiltrados = paises.filter((pais) =>
      pais.name.common.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (paisesFiltrados.length === 1) {
      const pais = paisesFiltrados[0];
      return (
        <div>
          <h1>{pais.name.common}</h1>
          <p>Capital: {pais.capital[0]}</p>
          <p>Área: {pais.area} km2</p>
          <p>Lenguas oficiales:</p>
          <ul>
            {Object.values(pais.languages).map((lengua, index) => (
              <li key={index}>{lengua}</li>
            ))}
          </ul>
          <img
            src={pais.flags.png}
            alt={`Bandera de ${pais.name.common}`}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="divPais">
        <h1 className="h1Pais">Países e Información</h1>
        <button className="btnPais" onClick={changeCountryVisibility}>
          {showPaises ? "Ocultar Países" : "Mostrar Países"}
        </button>
      </div>
      <br />
      <input
        className="inputPais"
        placeholder="Filtrar países..."
        value={busqueda}
        onChange={handleInputChange}
      />
      {showPaises && (
        <ul className="ulCountry">
          {paises
            .filter((pais) =>
              pais.name.common.toLowerCase().includes(busqueda.toLowerCase())
            )
            .map((pais, index) => (
              <li className="liCountry" key={index}>
                {pais.name.common}
              </li>
            ))}
        </ul>
      )}
      {showExtraInfo()}
    </>
  );
};

export default ComponentePais;
