import React, {useEffect} from "react"
import './Styles.css'
import { FaGithub, FaLinkedin} from 'react-icons/fa6'
import Logo from './img/front-end-logo.png'
import Curriculo from './arquivo/AladioCurrículo.pdf'
import ScrollReveal from "scrollreveal"

export default function Main() {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.img-logo', {
            delay: 400,
            distance: '60px',
            easing: 'ease-out',
            origin: 'left',
            duration: 1500,
        });   
        
        sr.reveal('.conteudo', {
            delay: 400,
            distance: '30px',
            easing: 'ease-out',
            origin: 'bottom',
            duration: 1500,
        }); 
        
    })

    return (
        <div>                   
            <main>
                <div className="main" id="home">
                        <div className="img-logo">
                            <img className="logo" src={Logo} alt="logo front end"/>
                        </div>

                        <div className="conteudo">
                            <h1>Olá eu sou o Aládio</h1>
                            <h2>Desenvolvedor Front End</h2>
                            <div className="icones">
                                <a href="https://github.com/A1AD10" target="_blank">
                                    <FaGithub  className="icone"/>
                                </a>
                                <a href="https://www.linkedin.com/in/aládio-junior285" target="_blank">
                                    <FaLinkedin  className="icone"/>
                                </a>
                            </div>
                            <a href={Curriculo} download="AladioCurrículo.pdf" className="btn">
                                <span className="btnSpan">Download CV</span>
                            </a>
                        </div>
                
                </div>
            </main>
        </div>
    )
}