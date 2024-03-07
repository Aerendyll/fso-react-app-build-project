import React from 'react'

function Gatos({nombre,color,precio,setTotal}) {
    const ruta="./src/img/foto_"
    const imagen=`${ruta}${nombre.toLowerCase()}.jpg`
 
    const comprar =(elemento)=>{
        setTotal((e) => e+precio)
        elemento.target.parentNode.parentNode.parentNode.style.display="none"
 }
 
    return (
    <>
    <div className="gatos" style={{backgroundColor:color}}>
        <h2>{nombre}</h2>
        <img src={imagen} />
        <div className="titulo">Precio</div>
        <div className="precio">
            {precio}€
            <div>
                <button onClick={comprar}>  Comprar cena</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Gatos