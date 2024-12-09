import React, { useEffect } from "react";
import './Projetos.css'
import ScrollReveal from "scrollreveal";
import CardProjetos from "./CardProjetos";

export default function Projetos({ darkMode }) {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.card-container', {
            delay: 600,
            distance: '20px',
            easing: 'ease-out',
            origin: 'bottom',
            duration: 1100,
        });
    }, []);

    return (
        <section className="h-screen">
            <div id="projetos" className="w-3/4 mx-auto">
                <h1 className="my-4 text-center uppercase text-xl font-semibold md:text-3xl dark:text-branco">Projetos</h1>
                <CardProjetos darkMode={darkMode}/>             
            </div>
        </section>
    );
}
