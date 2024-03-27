import React from "react";
import { useState } from "react";

const PersonArray = () => {
  const [totalAge, setTotalAge] = useState(0);
  const personArr = [
    {
      nombre: "Juan",
      edad: 25,
      genero: "masculino",
      ciudad: "Madrid",
    },
    {
      nombre: "María",
      edad: 30,
      genero: "femenino",
      ciudad: "Barcelona",
    },
    {
      nombre: "Pedro",
      edad: 35,
      genero: "masculino",
      ciudad: "Sevilla",
    },
  ];

  return (
    <div>
      <h2>Personas</h2>
      <ul className="personArr">
        {personArr.map((person, index) => (
          <li className="personLi" key={index}>
            <p>Nombre: {person.nombre}</p>
            <p>Edad: {person.edad}</p>
            <p>Género: {person.genero}</p>
            <p>Ciudad: {person.ciudad}</p>
          </li>
        ))}
      </ul>
      <p className="personArrP">
        Edad total de las personas:{" "}
        {personArr.reduce((total, person) => total + person.edad, totalAge)}
      </p>
    </div>
  );
};

export default PersonArray;
