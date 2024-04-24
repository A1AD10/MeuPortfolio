import React, {useState} from "react";
import Mobile from "./mobile";
import './Nav.css'
import {FaBars, FaXmark} from 'react-icons/fa6';

export default function Nav() {

    const [abre, setAbre] = useState(false)
    
      const closeMenu = () => {
        setAbre(false);
      };

    return (
        <div>
            <nav>
                <p>A1AD10</p>
                <div className="navbar">
                    <ul>
                        <li><a href="#home" data-text="Home">Home</a></li>
                        <li><a href="#habilidades" data-text="Habilidades">Habilidades</a></li>
                        <li><a href="#projetos" data-text="Projetos">Projetos</a></li>
                        <li><a href="#contato" data-text="Contato">Contato</a></li>
                    </ul>
                    <div>
                        <button onClick={() => setAbre(!abre)}>{abre?<FaXmark/>:<FaBars/>}</button>                            
                    </div>                        
                </div>
            </nav>
            <div className="nav-menu">
                {abre && <Mobile abre={abre} closeMenu={closeMenu}/>}
            </div>
        </div>
    )
}