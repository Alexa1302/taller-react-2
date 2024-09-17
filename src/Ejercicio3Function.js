import React, { useState } from "react";

function ContadorFuncional(props) {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <p>{contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}

export default ContadorFuncional;