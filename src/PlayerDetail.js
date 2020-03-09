// Importar bibliotecas
import React from "react";

// Criar componente
const PlayerDetail = (props) => { // => igual a function 
    return ( // props é o objeto
        <div>
        <h1>{props.nome}</h1>
        <h2>{props.idade}</h2>
        <h3>{props.nacionalidade}</h3>
        <h4>{props.profissao}</h4>
        </div>
    );
}

// Exportar componentes
export default PlayerDetail;