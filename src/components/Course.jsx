import React, { useState } from "react";

const Course = () => {
  const [courses, setCourses] = useState([
    {
      name: "Asignaturas lógicas",
      id: 1,
      parts: [
        {
          name: "Matemáticas",
          exercises: 10,
          id: 1,
        },
        {
          name: "Informática",
          exercises: 7,
          id: 2,
        },
        {
          name: "Física",
          exercises: 14,
          id: 3,
        },
        {
          name: "Química",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Asignaturas de estudio",
      id: 2,
      parts: [
        {
          name: "Historia",
          exercises: 3,
          id: 1,
        },
        {
          name: "Literatura",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]);

  const [newNote0, setNewNote0] = useState("");
  const [newExercise0, setNewExercise0] = useState("");
  const [toggleBtn, setToggleBtn] = useState(true);

  const toggleAsignaturas = () => {
    setToggleBtn(!toggleBtn);
  };

  const addNotes0 = (event) => {
    event.preventDefault();
    const noteObject = {
      name: newNote0,
      exercises: parseInt(newExercise0),
      id: courses[0].parts.length + 1,
    };
    const updatedParts0 = [...courses[0].parts, noteObject];

    setCourses((prevCourses) => [
      { ...prevCourses[0], parts: updatedParts0 },
      prevCourses[1], // No modificamos el segundo curso
    ]);

    setNewNote0("");
    setNewExercise0("");
  };

  const [newNote1, setNewNote1] = useState("");
  const [newExercise1, setNewExercise1] = useState("");
  const [toggleBtn1, setToggleBtn1] = useState(true);

  const toggleAsignaturas1 = () => {
    setToggleBtn1(!toggleBtn1);
  };

  const addNotes1 = (event) => {
    event.preventDefault();
    const noteObject = {
      name: newNote1,
      exercises: parseInt(newExercise1),
      id: courses[1].parts.length + 1,
    };
    const updatedParts1 = [...courses[1].parts, noteObject];

    setCourses((prevCourses) => [
      prevCourses[0], // No modificamos el primer curso
      { ...prevCourses[1], parts: updatedParts1 },
    ]);

    setNewNote1("");
    setNewExercise1("");
  };

  return (
    <div className="contenedorAsignaturas">
      <div className="divPadreCourse">
        <div className="h1Course">
          <h1>{courses[0].name}</h1>

          <form onSubmit={addNotes0}>
            <input
              value={newNote0}
              onChange={(e) => setNewNote0(e.target.value)}
              placeholder="Nueva asignatura"
            />
            <input
              value={newExercise0}
              onChange={(e) => setNewExercise0(e.target.value)}
              placeholder="Nuevos ejercicios"
            />
          </form>
          <button className="courseBtn" type="submit">
            Añadir asignatura y ejercicios
          </button>
          <button onClick={toggleAsignaturas}>
            {" "}
            {toggleBtn ? "Esconder" : "Mostrar"} asignaturas lógicas
          </button>
          {toggleBtn && (
            <>
              <ul>
                {courses[0].parts.map((part, index) => (
                  <li key={index}>
                    {part.name} {part.exercises}
                  </li>
                ))}
              </ul>
              <p>
                Total de ejercicios{" "}
                {courses[0].parts.reduce((sum, valor) => {
                  return sum + valor.exercises;
                }, 0)}
              </p>
            </>
          )}
        </div>
        <div className="h1Course">
          <h1>{courses[1].name}</h1>
          <form onSubmit={addNotes1}>
            <input
              value={newNote1}
              onChange={(e) => setNewNote1(e.target.value)}
              placeholder="Nueva asignatura"
            />
            <input
              value={newExercise1}
              onChange={(e) => setNewExercise1(e.target.value)}
              placeholder="Nuevos ejercicios"
            />
          </form>
          <button className="courseBtn" type="submit">
            Añadir asignatura y ejercicios
          </button>
          <button onClick={toggleAsignaturas1}>
            {toggleBtn1 ? "Esconder" : "Mostrar"} asignaturas de estudio
          </button>
          {toggleBtn1 && (
            <>
              <ul>
                {courses[1].parts.map((part, index) => (
                  <li key={index}>
                    {part.name} {part.exercises}
                  </li>
                ))}
              </ul>
              <p>
                Total de ejercicios{" "}
                {courses[1].parts.reduce((sum, valor) => {
                  return sum + valor.exercises;
                }, 0)}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
