import React from "react"
import Nav from "./componentes/Nav"
import Main from "./componentes/Main"
import Habilidades from "./componentes/Habilidades"
import Projetos from "./componentes/Projetos"
import Contato from "./componentes/Contato"
import Footer from "./componentes/Footer"



export default function App(){
  return(
    <div className="App">
      <Nav/>
      <Main/>
      <Habilidades/>
      <Projetos/>
      <Contato/>
      <Footer/>      
    </div>
  )
}
