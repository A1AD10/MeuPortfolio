import React, {useState, useEffect} from "react";
import emailjs from '@emailjs/browser'
import './Contato.css'
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
            <div className="section" id="contato">
                <h1 >CONTATO</h1>
                <div className="container">
                    
                    <form className="form" onSubmit={sendEmail}>
                        <input 
                        className="input"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                            
                        <input 
                        className="input"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />

                        <textarea 
                        className="textarea"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        />

                        <input className="button" type="submit" value="Enviar" />
                    </form>

                </div>    
            </div>
        </section>
    )
}
