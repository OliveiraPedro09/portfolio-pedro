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
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Sobre</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Projetos</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contact} alt="" className="desktopMenuImg" />
                Contato
            </button>
        </nav>
    )
}

export default Navbar;