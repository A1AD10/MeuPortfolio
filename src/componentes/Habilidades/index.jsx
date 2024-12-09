import React, { useState } from "react";
import Card from "./CardHabilidades";
import { skills } from "./InformacoesCard/Skills";
import { cardTexts } from "./InformacoesCard/Descrições"; 

export default function Habilidades() {

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="md:h-screen">
            <div className="section" id="habilidades">
                <h1 className="my-4 text-center uppercase text-xl font-semibold md:text-3xl dark:text-branco">Habilidades</h1>
                <div className="flex flex-wrap gap-6 p-6 justify-center lg:w-[95%] lg:mx-auto xl:w-[75%]">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setHoveredCard(index)}  
                            onMouseLeave={() => setHoveredCard(null)}  
                        >
                            <Card logo={skill.logo} />
                        </div>
                    ))}
                </div>
                
                <div className="mt-6 p-6 text-center text-preto rounded-md dark:text-branco">
                    <p className="sm:block hidden text-lg font-semibold">{hoveredCard !== null ? cardTexts[hoveredCard] : ""}</p>
                </div>
            </div>
        </section>
    );
}
