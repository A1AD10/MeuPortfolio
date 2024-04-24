import React from "react";
import './Footer.css'
import { FaGithub, FaLinkedin, FaFileArrowDown} from 'react-icons/fa6'
import Curriculo from './arquivo/AladioCurrículo.pdf'

export default function Footer() {

    const data = new Date()
    const ano = data.getFullYear()

    return (
        <footer>
            <div className="footer">
                <p className="criador">Criado por Aládio</p>
                    <div className="container-icone">
                        <a href="https://github.com/A1AD10" target="_blank">
                            <FaGithub className="icone-footer"/>
                        </a>
                        <a href="https://www.linkedin.com/in/aládio-junior285" target="_blank">
                            <FaLinkedin className="icone-footer"/>
                        </a>
                        <a href={Curriculo} download="AladioCurrículo.pdf">
                            <FaFileArrowDown className="icone-footer"/>
                        </a>
                    </div>
                
                <p className="direitos">&copy; {ano} Copyright. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}