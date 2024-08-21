import React from 'react';
import '../css/Funcionalidade.css';

const Funcionalidade = ({ imagem, titulo, descricao }) => {
    return (
        <div className="funcionalidade">
            <img src={imagem} alt={titulo} className="imagem-icone" />
            <h3 className="funcionalidade-titulo">{titulo}</h3>
            <p className="funcionalidade-descricao">{descricao}</p>
        </div>
    );
}

export default Funcionalidade;
