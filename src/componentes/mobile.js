import React from "react";
import './mobile.css'

export default function Mobile({ abre, closeMenu }) {

    const handleLinkClick = () => {
        closeMenu(); 
    };

    return (
        <div className="mobile">
            {abre && <ul>
                <li><a href="#home" onClick={handleLinkClick} data-text="Home">Home</a></li>
                <li><a href="#habilidades" onClick={handleLinkClick} data-text="Habilidades">Habilidades</a></li>
                <li><a href="#projetos" onClick={handleLinkClick} data-text="Projetos">Projetos</a></li>
                <li><a href="#contato" onClick={handleLinkClick} data-text="Contato">Contato</a></li>
            </ul>}
        </div>
    )
}