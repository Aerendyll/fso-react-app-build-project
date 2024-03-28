import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import ImagenesEstaticas from "./components/ImagenesEstaticas";
import CambioImagen from "./components/CambioImagen";
import SeccionGatos from "./components/SeccionGatos";
import PersonArray from "./components/PersonArray";
import Course from "./components/Course";
import Persons from "./components/Persons";
import ComponentePais from "./components/ComponentePais";

const App = () => {
  return (
    <div className="divPadre">
      <div className="divTitulo">
        <h1 className="titulo">Prueba refuerzo conocimientos </h1>
        <p className="comentario">
          En este ejercicio sin guía voy a intentar hacer uso de los
          conocimientos que he ido adquiriendo sobre React por el momento.
        </p>
      </div>
      <ImagenesEstaticas
        imagenes={[
          "./src/img/foto-limon.jpg",
          "./src/img/foto-platano.jpg",
          "./src/img/foto-sopa.jpg",
          "./src/img/foto-sopaplatano.jpg",
        ]}
      />
      <CambioImagen />
      <SeccionGatos />
      <div className="div1">
        <h2 className="h2texto">
          A partir de este apartado vamos a implementar en conjunto todo lo dado
          en la parte 2 de FSO ➡️ componentes, servicios y backend con APIs
          <br /> <br />
          De hecho lo que quiero conseguir a partir de este apartado va a ser lo
          siguiente, una App que contenga:
          <br/>  <br/>
          <li className="liPt3">Componentes</li>
          <li className="liPt3">Obtención de datos mediante back-end (propio)</li>
          <li className="liPt3">Filtrado de datos</li>
          <li className="liPt3">Mostrar datos extra (si condiciones)</li>
          <li className="liPt3">Añadir y borrar datos alojados en el servidor</li>
          <li className="liPt3">Obtención de datos mediante API</li>
        </h2>
        <PersonArray />
        <Course />
        <Persons/>
        <ComponentePais/>
      </div>
    </div>
  );
};

export default App;
