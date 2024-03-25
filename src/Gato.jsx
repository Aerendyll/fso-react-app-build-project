import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const OPTIONS = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};
function Gato({ nombre, color, precio, setTotal }) {
  const ruta = "./src/img/foto_";
  const imagen = `${ruta}${nombre.toLowerCase()}.jpg`;

  const comprar = (elemento) => {
    setTotal((e) => e + precio);
    elemento.target.parentNode.parentNode.parentNode.style.display = "none";
    // toast.info(`noo compraste a ${nombre} por la friolera de ${precio} euros`, OPTIONS);
    toast.info(`noo compraste a ${nombre} por la friolera de ${precio} euros`, OPTIONS);
  };

  return (
    <>
      <div className="gatos" style={{ backgroundColor: color }}>
        <h2>{nombre}</h2>
        <img className="gatoImg" src={imagen} />
        <div className="titulo">Precio</div>
        <div className="precio">
          {precio}€
          <div>
            <button onClick={comprar}> Comprar cena</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gato;
