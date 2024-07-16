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
                <Link to="intro" className="desktopMenuListItem" smooth={true} duration={500} >Home</Link>
                <Link to="sobre" className="desktopMenuListItem" smooth={true} duration={500} >Sobre</Link>
                <Link to="projetos" className="desktopMenuListItem" smooth={true} duration={500} >Projetos</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contact} alt="" className="desktopMenuImg" />
                Entre em Contato
            </button>
        </nav>
    )
}

export default Navbar;