import React, {useState, useEffect} from "react";
import emailjs from '@emailjs/browser'
//import './Contato.css'
import ScrollReveal from "scrollreveal"

export default function Contato() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    function sendEmail(e) {
        e.preventDefault()
        if(name === '' || email === '' || message === ''){
            alert("preencha todos os campos")
            return
        }
        
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_8hu83i3","template_sh7nyu7", templateParams, "JL_o7QrjOcJ4FiS4U")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')            
        }, (err) => {
            console.log("ERRO: ", err)
        })
    }

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.container', {
            delay: 800,
            distance: '0',
            easing: 'ease-out',
            duration: 1800,
        });
    })

    return (
        <section>
            <div className="h-screen" id="contato">
                <h1 className="my-4 text-center uppercase text-xl font-semibold md:text-3xl">CONTATO</h1>
                <div className="flex justify-center items-center flex-col text-preto pt-14 pr-3.5 pb-[84px] pl-3.5 md:pb-[70px]">
                    
                    <form className="max-w-[600px] w-11/12 flex flex-col container" onSubmit={sendEmail}>
                        <input 
                        className="mb-3.5 h-9 rounded divide-solid border-2 border-preto py-0 px-2 focus:outline-none focus:border-azul"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                            
                        <input 
                        className="mb-3.5 h-9 rounded divide-solid border-2 border-preto py-0 px-2 focus:outline-none focus:border-azul"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />

                        <textarea 
                        className="mb-3 rounded-md divide-solid border-2 border-preto p-2 h-28 resize-none focus:outline-none focus:border-azul md:mb-4"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        />

                        <input className="h-9 rounded border-0 cursor-pointer bg-preto text-branco text-lg font-semibold transition-transform duration-700 hover:bg-azul hover:scale-[1.01]" type="submit" value="Enviar" />
                    </form>

                </div>    
            </div>
        </section>
    )
}
