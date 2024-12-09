import { useEffect } from "react";
import React from "react";
import ScrollReveal from "scrollreveal";

export default function Card ({ logo }) {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.container-card', {
            delay: 500,
            distance: '30px',
            easing: 'ease-out',
            origin: 'bottom',
            duration: 800,
            interval: 200,
        });
    }, []);

    return (
        <article className="flex justify-center items-center container-card">
            <div className="fill-azul bg-neutral-50 box-border h-28 w-36 border-2 p-6 hover:border-azulClaro hover:ease-in-out duration-100 hover:fill-azulClaro flex justify-center items-center rounded lg:h-28 lg:w-40 dark:fill-darkAzulClaro dark:bg-dark dark:hover:fill-azul dark:hover:border-azul">
                <div className="w-16 h-16">
                    {logo}
                </div>
            </div>
        </article>
    )
}
