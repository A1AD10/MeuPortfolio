import React, {useEffect} from "react"
import { FaGithub, FaLinkedin} from 'react-icons/fa6'
import LogoLight from '../img/logo_light.png'
import LogoNight from '../img/logo_night.png'
import Curriculo from '../arquivo/AladioCurrículo.pdf'
import ScrollReveal from "scrollreveal"

export default function Capa ({ darkMode }) {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.img-logo', {
            delay: 400,
            distance: '60px',
            easing: 'ease-out',
            origin: 'left',
            duration: 1500,
        });   
        
        sr.reveal('.conteudo', {
            delay: 400,
            distance: '30px',
            easing: 'ease-out',
            origin: 'bottom',
            duration: 1500,
        }); 
        
    })

    return (
        <section className="h-screen dark:bg-dark">
            <div className="md:py-20 md:h-full md:flex md:items-center md:justify-evenly md:flex-row-reverse" id="home">
                <div className="img-logo flex items-center justify-center pt-24 pb-8 md:flex md:items-center md:justify-center ">
                    <img className="w-60 md:w-64 lg:w-80 " src={darkMode ? LogoNight : LogoLight} alt="logo front end" />
                </div>

                <div className="conteudo ml-7 md:ml-0">
                    <h1 className="text-sm md:text-base lg:text-preto lg:text-xl/8 font-bold dark:text-branco ">Olá eu sou o Aládio</h1>
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-azul dark:text-darkAzulClaro">Desenvolvedor Front End</h2>
                    <div className="flex">
                        <a className="hover:text-azul hover:duration-100 dark:text-branco dark:hover:text-darkAzulClaro" href="https://github.com/A1AD10" target="_blank">
                            <FaGithub className="my-2.5 mx-1 text-2xl" />
                        </a>
                        <a className="hover:text-azul hover:duration-100 dark:text-branco dark:hover:text-darkAzulClaro" href="https://www.linkedin.com/in/aládio-junior285" target="_blank">
                            <FaLinkedin className="my-2.5 mx-1 text-2xl" />
                        </a>
                    </div>
                    <a href={Curriculo} download="AladioCurrículo.pdf" className="relative outline-none no-underline rounded-3xl bg-preto h-11 w-32 flex justify-center items-center cursor-pointer uppercase opacity-100 border-solid border-black hover:bg-azul hover:duration-100 dark:bg-branco dark:hover:bg-darkAzulClaro">
                        <span className="text-branco text-xs font-semibold dark:text-dark">Download CV</span>
                    </a>
                </div>
            </div>
        </section>
    )
}