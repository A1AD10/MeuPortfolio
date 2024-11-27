import './App.css'
import React from 'react'
import Nav from './componentes/Menu/Navbar'
import Capa from './componentes/Capa'
import Habilidades from './componentes/Habilidades'
import Projetos from './componentes/Projetos'
import Contato from './componentes/Contato'
import Footer from './componentes/Footer'

export default function App() {

  return (
    <div className="font-montserrat tracking-wider h-5/6">
      <Nav />
      <Capa />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />      
    </div>
  )
}


