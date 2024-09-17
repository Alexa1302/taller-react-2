import React, { useState } from "react";
import Producto from "./Ejercicio2";

const ListaDeProductos =({producto}) => {
    const [productos, setProductos] = useState(producto);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    
    const agregarProducto = () => {
        const nuevoProducto = {nombreProducto: nombre, precio: precio};
        setProductos([...productos,nuevoProducto]);
        setNombre('');
        setPrecio('');
    };

    return (
        <div style={{padding: '10px'}}>
            <h1>Lista de Productos</h1>
            <ul>
                {productos.map((producto, index) =>(
                    <li key = {index}>
                        <Producto nombreProducto = {producto.nombreProducto} precio = {producto.precio}/>
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Nombre del Producto" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <input type="text" placeholder="Precio del Producto" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
            <button onClick={agregarProducto}>Agregar Producto</button>
        </div>
    );
}

export default ListaDeProductos;