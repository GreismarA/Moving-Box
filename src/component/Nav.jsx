import { useState } from "react"
import { Menu } from "./Menu"
import "../style/Nav.css"

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [equis, setEquis] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
      setEquis(!equis);
  };
 
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
   

    return(
        <>
            <nav className="nav fixed top-0 left-0 w-full z-10">
                <div className="nav_logo">Logo</div>
                <div className={`nav_items ${isOpen ? "open" : ""}`}>
                    <a href="#inicio">
                        <Menu>Inicio</Menu>
                    </a>
                    <a href="#nosotros">
                        <Menu>Sobre nosotros</Menu>
                    </a>
                    <a href="#contacto">
                        <Menu>Proceso</Menu>
                    </a>
                    <a href="#crear" onClick={() => scrollToSection("seccion-1")}>
                        <Menu>Crear caja</Menu>
                    </a>
                </div>
                <div className={`nav_toggle ${equis ? "close" : ""}`} onClick={handleClick} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}

export {Navbar}
