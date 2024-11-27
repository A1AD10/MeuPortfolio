import React from "react";
import NavbarLink from "../NavbarLink";

export default function Mobile({ abre, closeMenu }) {

    const handleLinkClick = () => {
        closeMenu(); 
    };

    return (
        <div className="bg-branco mt-20 fixed w-full h-full z-10 font-montserrat uppercase font-semibold">
            {abre && <ul className="text-center relative text-xl/[4rem]">
                <NavbarLink href="#home" onClick={handleLinkClick} data-text="Home">Home</NavbarLink>
                <NavbarLink href="#habilidades" onClick={handleLinkClick} data-text="Habilidades">Habilidades</NavbarLink>
                <NavbarLink href="#projetos" onClick={handleLinkClick} data-text="Projetos">Projetos</NavbarLink>
                <NavbarLink href="#contato" onClick={handleLinkClick} data-text="Contato">Contato</NavbarLink>
            </ul>}
        </div>
    )
}