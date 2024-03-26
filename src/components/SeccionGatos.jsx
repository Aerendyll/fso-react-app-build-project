
import { useState } from "react";
import React from "react";
import Gato from "../Gato";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




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

const SeccionGatos = () => {
  const [total, setTotal] = useState(0);
  
  const resetBtn = () =>{
    setTotal(0)
    
  }
  return (
    <div className="div1">
      <h2 className="h2texto">
        En este apartado habrán 3 imágenes y cada 1 al hacerle click en su
        botón se esconderán respectivamente y sumarán el precio a un contador
        llamado Total.
      </h2>
      <h2 className="totalPay">Total a pagar : {total} € <button onClick={resetBtn}> Reset </button></h2> 
      <div className="cajaCentral">
        {gatos.map((gato, index) => (
          <Gato key={index} nombre={gato.nombre} color={gato.color} precio={gato.precio} setTotal={setTotal} />
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default SeccionGatos;
