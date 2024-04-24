import React, {useEffect} from "react";
import './Projetos.css'
import ScrollReveal from "scrollreveal"

export default function Projetos() {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.card-container, .card-container2', {
            delay: 600,
            distance: '20px',
            easing: 'ease-out',
            origin: 'bottom',
            duration: 1100,
            interval: 500,
        });           
    })

    return (
        <section>
            <div className="section" id="projetos">
                <h1>Projetos</h1>
                    <div className="card-container">
                        <div className="card1" id="card-box">
                            <div className="projeto">
                                <h1>Alura Books</h1>
                                <a href="https://a1ad10.github.io/alurabook/" target="_blank" className="projeto-btn">Acessar</a>
                            </div>
                        </div>

                        <div className="text-card">
                            <h3>Alura Books</h3>
                            <p>Neste projeto foram criadas variáveis CSS, questões de semântica e de acessibilidade, além de informações pegas no Figma, também foram utilizados flexbox e media queries, na implementação do carrossel foi utilizado o plugin externo SwiperJs.</p>
                        </div>
                    </div>

                    <div className="card-container2">
                        <div className="card2" id="card-box">
                            <div className="projeto">
                                <h1>Analisador de Números</h1>
                                <a href="https://a1ad10.github.io/analisador-de-numeros/" target="_blank" className="projeto-btn">Acessar</a>
                            </div>
                        </div>

                        <div className="text-card2">
                            <h3>Analisador de Números</h3>
                            <p>Neste projeto utilizando Javascript, são analisados números entre 1 e 100, é informado quantos números foram inseridos, o de maior valor, de menor valor, a soma de todos e a média de todos.</p>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="card3" id="card-box">
                            <div className="projeto">
                                <h1>Número Secreto</h1>
                                <a href="https://jogo-numero-secreto-a1ad10.vercel.app/" target="_blank" className="projeto-btn">Acessar</a>
                            </div>
                        </div>

                        <div className="text-card">
                            <h3>Número Secreto</h3>
                            <p>Neste projeto foi utilizado reconhecimento de voz para acertar o número secreto, cada código JavaScript foi dividido em pastas, um para sortear o número, outro para fazer as validações, outro para fazer o reconhecimento de voz utilizando o Web Speech API.</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}