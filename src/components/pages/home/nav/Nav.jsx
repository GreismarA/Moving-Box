import { useState } from "react"
import Menu from "./Menu.jsx"
import "./Nav.css"

function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    const [equis, setEquis] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
      setEquis(!equis);
  };
 
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
                    <a href="#proceso">
                        <Menu>Proceso</Menu>
                    </a>
                    <a href="#crear">
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

export default Nav;
