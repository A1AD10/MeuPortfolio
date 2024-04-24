import React, {useEffect} from "react";
import './Habilidades.css'
import LogoHtml from './img/html.png'
import LogoCss from './img/css.png'
import LogoJavascript from './img/javascript.png'
import LogoTypescript from './img/typescript.png'
import LogoReact from './img/react.png'
import LogoVsCode from './img/vscode.png'
import ScrollReveal from "scrollreveal"

export default function Habilidades() {

    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.container-card', {
            delay: 1500,
            distance: '30px',
            easing: 'ease-out',
            origin: 'bottom',
            duration: 800,
            interval: 500,
        }); })

    return (
        <section>
            <div className="section" id="habilidades">
                <h1>Habilidades</h1>  

                <div className="cont">
                    <div className="container-card">
                        <img src={LogoHtml} className="logo-card"/>
                        <h3>Html</h3>
                    </div>
                    <div className="container-card">
                        <img src={LogoCss} className="logo-card"/>
                        <h3>Css</h3>
                    </div>
                    <div className="container-card">
                        <img src={LogoJavascript} className="logo-card"/>
                        <h3>Javascript</h3>
                    </div>
                    <div className="container-card">
                        <img src={LogoTypescript} className="logo-card"/>
                        <h3>Typescript</h3>
                    </div>
                    <div className="container-card">
                        <img src={LogoReact} className="logo-card"/>
                        <h3>React</h3>
                    </div>
                    <div className="container-card">
                        <img src={LogoVsCode} className="logo-card"/>
                        <h3>Vs Code</h3>
                    </div>
                </div>           
            </div>
        </section>
    )
}