import React from "react";

function DetalleProducto(props) {
    return (
        <div style={{padding: '10px'}}>
            <h3>{props.nombre}</h3>
            <h2>${props.precio}</h2>
            <p>{props.descripcion}</p>
        </div>
    );
}

export default DetalleProducto;