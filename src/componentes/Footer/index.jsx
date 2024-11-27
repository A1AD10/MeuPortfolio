import React from "react";
import { FaGithub, FaLinkedin, FaFileArrowDown} from 'react-icons/fa6'
import Curriculo from '../arquivo/AladioCurrículo.pdf'

export default function Footer() {

    const data = new Date()
    const ano = data.getFullYear()

    return (
        <footer>
            <div className="bg-preto w-full absolute">
                <p className="text-cinzaClaro py-4 text-base font-extralight flex items-center justify-center">Criado por Aládio</p>
                    <div className="flex items-center justify-center py-1">
                        <a className="mx-1 text-2xl" href="https://github.com/A1AD10" target="_blank">
                            <FaGithub className="p-[1px] rounded-2xl border divide-solid border-cinza text-preto bg-cinza"/>
                        </a>
                        <a className="mx-1 text-2xl" href="https://www.linkedin.com/in/aládio-junior285" target="_blank">
                            <FaLinkedin className="p-[1px] rounded-2xl border divide-solid border-cinza text-preto bg-cinza"/>
                        </a>
                        <a className="mx-1 text-2xl" href={Curriculo} download="AladioCurrículo.pdf">
                            <FaFileArrowDown className="p-[1px] rounded-2xl border divide-solid border-cinza text-preto bg-cinza"/>
                        </a>
                    </div>
                <p className="text-cinzaClaro py-4 text-xs font-extralight flex items-center justify-center">&copy; {ano} Copyright. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}