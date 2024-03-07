import React, { useState } from "react";
import "./App.css";
import imagenLimon from "./img/foto-limon.jpg";
import imagenPlatano from "./img/foto-platano.jpg";
import imagenSopa from "./img/foto-sopa.jpg";
import imagenSopaPlatano from "./img/foto-sopaplatano.jpg";
import Gatos from "./Gatos";

function App() {
  const [imagen, setImagen] = useState(imagenLimon);

  const cambiarImagen = () => {
    if (imagen === imagenLimon) {
      setImagen(imagenPlatano);
    } else if (imagen === imagenPlatano) {
      setImagen(imagenSopa);
    } else if (imagen === imagenSopa) {
      setImagen(imagenSopaPlatano);
    } else {
      setImagen(imagenLimon);
    }
  };

  const [total, setTotal] = useState(0);
  const gatos = [
    {
      nombre: "Sopi",
      color: "darkmagenta",
      precio: 50,
    },
    {
      nombre: "Limon",
      color: "darkolivegreen",
      precio: 20,
    },
    {
      nombre: "Platano",
      color: "darkred",
      precio: 10,
    },
  ];

  return (
    <>
      <div className="divTitulo">
        <h1 className="titulo">Prueba refuerzo conocimientos </h1>
        <p className="comentario">
          En este ejercicio sin guía voy a intentar hacer uso de los
          conocimientos que he ido adquiriendo sobre React por el momento.
        </p>
      </div>
      <div className="div1">
        <h2 className="h2texto">
          Este apartado va a consistir en 4 imágenes estáticas que mediante flex
          van a aprovechar el espacio total de su div y reorganizarse
          automáticamente.
        </h2>
        <div className="imgContainer">
          <img className="imgDiv1" src={imagenLimon} alt="limo" />
          <img className="imgDiv1" src={imagenPlatano} alt="plata" />
          <img className="imgDiv1" src={imagenSopa} alt="sopa" />
          <img className="imgDiv1" src={imagenSopaPlatano} alt="sopaplatano" />
        </div>
      </div>
      <div className="div1">
        <h2 className="h2texto">
          En este apartado va a haber una única imagen que al pulsar en ella se
          va a ver actualizada y va a cambiar a otra foto con un useState.
        </h2>
        <div className="div2flex">
          <div className="cambiarImagen">
            <img
              onClick={cambiarImagen}
              className="imgDiv2"
              src={imagen}
              alt="foto"
            />
          </div>
        </div>
      </div>
      <div className="div1">
        <h2 className="h2texto">
          En este apartado habrán 3 imágenes y cada 1 al hacerle click en su
          botón se esconderán respectivamente y sumarán el precio a un contador
          llamado Total.
        </h2>
        <h2 className="totalPay">Total a pagar : {total} €</h2>
        <div className="cajaCentral">
          <div >
          <Gatos
            nombre={gatos[0].nombre}
            color={gatos[0].color}
            precio={gatos[0].precio}
            setTotal={setTotal}
          />
          <Gatos
            nombre={gatos[1].nombre}
            color={gatos[1].color}
            precio={gatos[1].precio}
            setTotal={setTotal}
          />
          <Gatos
            nombre={gatos[2].nombre}
            color={gatos[2].color}
            precio={gatos[2].precio}
            setTotal={setTotal}
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
