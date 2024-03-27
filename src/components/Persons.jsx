import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Notes = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const urlNotes = "http://localhost:3001/persons";
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    axios
      .get(urlNotes)
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const addPersons = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    axios
      .post(urlNotes, personObject)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        console.log("Error adding person", error);
      });
  };

  const changeListVisibility = () => {
    setShowList(!showList);
  };

  return (
    <>
      <h1 className="personH1">
        Componente que mostrará las notas y sus funcionalidades
      </h1>
      <div className="personForm">
        <form onSubmit={addPersons}>
          <div>
            Nombre: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            Número: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <button type="submit">Añadir Persona</button> <br />
          <button type="button" onClick={changeListVisibility}>
            Mostrar lista
          </button>
        </form>
      </div>

      {showList && (
        <container className="personsContainer">
          <ul>
            {persons.map((person, index) => (
              <li key={index}>
                {person.name} - {person.number}
              </li>
            ))}
          </ul>
        </container>
      )}
    </>
  );
};

export default Notes;
