import React, {useState, useEffect} from "react";
import Mobile from "../Mobile";
import NavbarLink from "../NavbarLink";
import {FaBars, FaXmark} from 'react-icons/fa6';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md"

export default function Nav({ darkMode, setDarkMode }) {

    const [abre, setAbre] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode((prev) => !prev);
    };
  
    const closeMenu = () => {
      setAbre(false);
    };

    return (
        <div className={`dark:bg-preto ${darkMode && "dark"}`}>
            <nav className="bg-branco flex items-center justify-around fixed top-0 left-0 z-10  w-full h-20 text-preto dark:bg-dark dark:text-branco">
                <p className="tracking-widest text-azul font-extrabold text-2xl dark:text-branco">A1AD10</p>
                <div className="flex">
                    <ul className="hidden md:flex uppercase text-sm">
                        <NavbarLink href="#home" data-text="Home">Home</NavbarLink>
                        <NavbarLink href="#habilidades" data-text="Habilidades">Habilidades</NavbarLink>
                        <NavbarLink href="#projetos" data-text="Projetos">Projetos</NavbarLink>
                        <NavbarLink href="#contato" data-text="Contato">Contato</NavbarLink>
                    </ul>
                    <div>
                        <button className="sm:block md:hidden text-xl" onClick={() => setAbre(!abre)}>{abre ? <FaXmark /> : <FaBars />}</button>
                    </div>
                </div>
                <button
                    onClick={toggleDarkMode}
                    className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 py-2 px-4 md:py-3 md:px-3 lg:px-6 text-lg rounded-full font-semibold  hover:scale-105 transition-all duration-300 dark:border-branco">
                    {darkMode ? <MdOutlineLightMode className="text-xl lg:text-2xl" /> : <MdDarkMode className="text-xl lg:text-2xl" />}
                </button>
            </nav>
            <div>
                {abre && <Mobile darkMode={darkMode} toggleDarkMode={toggleDarkMode} abre={abre} closeMenu={closeMenu}/>}
            </div>
        </div>
    )
}