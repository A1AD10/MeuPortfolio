import React, {useState} from "react";
import Mobile from "../Mobile";
import NavbarLink from "../NavbarLink";
import {FaBars, FaXmark} from 'react-icons/fa6';

export default function Nav() {

    const [abre, setAbre] = useState(false)
    
      const closeMenu = () => {
        setAbre(false);
      };

    return (
        <div>
            <nav className="bg-branco flex items-center justify-around fixed top-0 left-0 z-10  w-full h-20 text-preto">
                <p className="tracking-widest text-azul font-extrabold text-2xl">A1AD10</p>
                <div>
                    <ul className="hidden md:flex uppercase text-sm">
                        <NavbarLink href="#home" data-text="Home">Home</NavbarLink>
                        <NavbarLink href="#habilidades" data-text="Habilidades">Habilidades</NavbarLink>
                        <NavbarLink href="#projetos" data-text="Projetos">Projetos</NavbarLink>
                        <NavbarLink href="#contato" data-text="Contato">Contato</NavbarLink>
                    </ul>
                    <div>
                        <button className="sm:block md:hidden text-xl" onClick={() => setAbre(!abre)}>{abre?<FaXmark/>:<FaBars/>}</button>                            
                    </div>                        
                </div>
            </nav>
            <div>
                {abre && <Mobile abre={abre} closeMenu={closeMenu}/>}
            </div>
        </div>
    )
}