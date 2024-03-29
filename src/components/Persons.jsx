import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import personServices from "../services/personServices";

const Notes = () => {
  const urlNotes = "http://localhost:3001/persons/";
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    personServices
      .getAll()
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    if (/^[a-zA-Z\s]*$/.test(inputValue)) {
      setNewName(inputValue);
    }
  };

  const handleNumberChange = (event) => {
    const inputValue = event.target.value;
    // Verificar si el valor ingresado contiene solo números
    if (/^[0-9]*$/.test(inputValue)) {
      setNewNumber(inputValue);
    }
  };
  const addPersons = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString()
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
  
  const deletePerson = (id) => {
    axios.delete(`${urlNotes}${id}`)
      .then(() => {
        const updatedPersons = persons.filter(person => person.id !== id);
        setPersons(updatedPersons);
      })
      .catch((error) => {
        console.log("Error deleting person", error);
      });
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
            Número:{" "}
            <input
              type="text"
              value={newNumber}
              onChange={handleNumberChange}
            />
          </div>
          <button  type="submit">Añadir Persona</button> <br />
          <button type="button" onClick={changeListVisibility}>
            Mostrar lista
          </button>
        </form>
      </div>
      {showList && (
        <div className="personsContainer">
          <ul>
            {persons.map((person, index) => (
              <li key={index}>
                {person.name} - {person.number}  <button onClick={() => deletePerson(person.id)}>borrar</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Notes;
