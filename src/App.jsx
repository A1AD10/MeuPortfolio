import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import Nav from './componentes/Menu/Navbar'
import Capa from './componentes/Capa'
import Habilidades from './componentes/Habilidades'
import Projetos from './componentes/Projetos'
import Contato from './componentes/Contato'
import Footer from './componentes/Footer'

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    
  }, [darkMode]);

  return (
    <div className="font-montserrat tracking-wider h-5/6 dark:bg-dark">
      <Nav setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Capa darkMode={darkMode}/>
      <Habilidades />
      <Projetos darkMode={darkMode}/>
      <Contato />
      <Footer />      
    </div>
  )
}


