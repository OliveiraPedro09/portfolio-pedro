import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.svg";
import { Link } from "react-scroll";

const Navbar = () => {

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktop-menu">
                <Link to="intro" offset={0} className="desktopMenuListItem" smooth={true} duration={600} >Home</Link>
                <Link to="sobre" offset={0} className="desktopMenuListItem" smooth={true} duration={600} >Sobre</Link>
                <Link to="projetos" offset={0} className="desktopMenuListItem" smooth={true} duration={600} >Projetos</Link>
            </div>
            <Link offset={0} to="contato" smooth={true} duration={600} >
                <button className="desktopMenuBtn">
                    <img src={contact} alt="" className="desktopMenuImg" />
                    Entre em Contato
                </button>
            </Link>
        </nav>
    )
}

export default Navbar;