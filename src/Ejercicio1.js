import React from "react";

function Saludo(props) {
    return (
        <div>
            <h1>Hola, {props.name}</h1>
        </div>
    );
}

export default Saludo;