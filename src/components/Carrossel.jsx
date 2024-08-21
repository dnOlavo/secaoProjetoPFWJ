import React, { useState, useEffect } from 'react';
import '../css/Carrossel.css';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const imagens = [img1, img2, img3];

const Carrossel = () => {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const carregarImagens = () => {
            const promises = imagens.map(src => {
                return new Promise(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                });
            });

            Promise.all(promises).then(() => {
                setCarregado(true);
            });
        };

        carregarImagens();
    }, []);

    useEffect(() => {
        if (carregado) {
            const intervalo = setInterval(() => {
                setIndiceAtual((indiceAtual + 1) % imagens.length);
            }, 3000);

            return () => clearInterval(intervalo);
        }
    }, [carregado, indiceAtual]);

    const anterior = () => {
        setIndiceAtual(indiceAtual === 0 ? imagens.length - 1 : indiceAtual - 1);
    };

    const proximo = () => {
        setIndiceAtual((indiceAtual + 1) % imagens.length);
    };

    if (!carregado) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="carrossel">
            <button className="carrossel-botao carrossel-anterior" onClick={anterior}>
                &lt;
            </button>
            <img src={imagens[indiceAtual]} alt="Carrossel" className="carrossel-imagem" />
            <button className="carrossel-botao carrossel-proximo" onClick={proximo}>
                &gt;
            </button>
            <div className="carrossel-indicadores">
                {imagens.map((_, indice) => (
                    <span
                        key={indice}
                        className={`indicador ${indice === indiceAtual ? 'ativo' : ''}`}
                        onClick={() => setIndiceAtual(indice)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carrossel;
