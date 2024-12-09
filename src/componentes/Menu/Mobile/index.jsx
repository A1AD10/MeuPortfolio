import React from "react";
import NavbarLink from "../NavbarLink";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function Mobile({ abre, closeMenu, darkMode, toggleDarkMode }) {

    const handleLinkClick = () => {
        closeMenu(); 
    };

    return (
        <div className="bg-branco mt-20 fixed w-full h-full z-10 font-montserrat uppercase font-semibold dark:bg-dark">
            {abre && <ul className="text-center relative text-xl/[4rem]">
                <NavbarLink href="#home" onClick={handleLinkClick} data-text="Home">Home</NavbarLink>
                <NavbarLink href="#habilidades" onClick={handleLinkClick} data-text="Habilidades">Habilidades</NavbarLink>
                <NavbarLink href="#projetos" onClick={handleLinkClick} data-text="Projetos">Projetos</NavbarLink>
                <NavbarLink href="#contato" onClick={handleLinkClick} data-text="Contato">Contato</NavbarLink>

                <button className="dark:text-branco" onClick={toggleDarkMode}>{darkMode ? <MdOutlineLightMode  /> : <MdDarkMode  />}</button>
            </ul>}
        </div>
    )
}