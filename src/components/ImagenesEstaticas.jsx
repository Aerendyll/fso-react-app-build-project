// ImagenesEstaticas.jsx
import React from "react";

const ImagenesEstaticas = ({ imagenes }) => {
  return (
    <div className="div1">
      <h2 className="h2texto">
        Este apartado va a consistir en 4 imágenes estáticas que mediante flex
        van a aprovechar el espacio total de su div y reorganizarse
        automáticamente.
      </h2>
      <div className="imgContainer">
        {imagenes.map((imagen, index) => (
          <img key={index} className="imgDiv1" src={imagen} alt={`imagen-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ImagenesEstaticas;
