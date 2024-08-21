import React from 'react';
import Carrossel from './Carrossel';
import Funcionalidade from './Funcionalidade';

import qualidadeImg from '../assets/images/qualidade.jpg';
import agilidadeImg from '../assets/images/agilidade.jpg';
import confiancaImg from '../assets/images/confianca.jpg';

import '../css/SobreNos.css';

const SobreNos = () => {
    return (
        <section className="sobre-nos">
            <h1 className="sobre-nos-titulo">
                HÁ <span className="destaque">20 ANOS</span> OFERECENDO QUALIDADE E <br /> CONFIANÇA PARA VOCÊ E SEU VEÍCULO
            </h1>
            <p className="sobre-nos-descricao">
                A <span className="destaque">equipe de postos JL</span> sabe da importância de construir uma <strong>empresa <br/> sólida</strong>, 
                comprometida com o trabalho que desempenha e com a qualidade <br/> dos produtos que oferece aos seus clientes.
            </p>
            <Carrossel />
            <div className="sobre-nos-funcionalidades">
            <Funcionalidade
                imagem={qualidadeImg}
                titulo="QUALIDADE"
                descricao="Há 20 anos com a bandeira BR, oferecemos combustíveis de alta qualidade e confiabilidade para seu veículo."
            />
            <Funcionalidade
                imagem={agilidadeImg}
                titulo="AGILIDADE"
                descricao="Atendimento rápido e eficiente para quem precisa de agilidade no dia a dia. Valorize seu tempo conosco."
            />
            <Funcionalidade
                imagem={confiancaImg}
                titulo="CONFIANÇA"
                descricao="A confiança de nossos clientes é nosso maior prêmio. Fomos reconhecidos com o Prêmio Top Off Mind Araguari 2023."
            />
            </div>
        </section>
    );
}

export default SobreNos;
