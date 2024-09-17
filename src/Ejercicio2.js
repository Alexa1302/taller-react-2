import React from "react";
import NombreProducto from "./NombreProducto";
import PrecioProducto from "./PrecioProducto";

function Producto(props) {
    return (
        <div style={{padding: '10px'}}>
            <NombreProducto nombreProducto = {props.nombreProducto}/>
            <PrecioProducto precio = {props.precio}/>
        </div>
    );
}

export default Producto;