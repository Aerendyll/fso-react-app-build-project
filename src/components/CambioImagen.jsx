import React, { useState } from "react";
import imagenLimon from "../img/foto-limon.jpg";
import imagenPlatano from "../img/foto-platano.jpg";
import imagenSopa from "../img/foto-sopa.jpg";
import imagenSopaPlatano from "../img/foto-sopaplatano.jpg";

const CambioImagen = () => {
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

  return (
    <div className="div1">
      <h2 className="h2texto">
        En este apartado va a haber una única imagen que al pulsar en ella se va
        a ver actualizada y va a cambiar a otra foto con un useState.
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
  );
};

export default CambioImagen;
