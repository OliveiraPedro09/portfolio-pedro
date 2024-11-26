import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.svg";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.desktopMenu}>
                <Link to="intro2" offset={0} className={styles.desktopMenuListItem} smooth={true} duration={600}>Home</Link>
                <Link to="sobre2" offset={0} className={styles.desktopMenuListItem} smooth={true} duration={600}>Sobre</Link>
                <Link to="projetos2" offset={0} className={styles.desktopMenuListItem} smooth={true} duration={600}>Projetos</Link>
                <Link offset={0} to="contato2" smooth={true} duration={600}>
                    <button className={styles.desktopMenuBtn}>
                        <img src={contact} alt="" className={styles.desktopMenuImg} />
                        Entre em Contato
                    </button>
                </Link>
            </div>
            <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
                Menu
            </button>
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link to="intro2" offset={0} className={styles.desktopMenuListItem} smooth={true} duration={600} onClick={toggleMobileMenu}>Home</Link>
                    <Link to="sobre2" offset={0} className={styles.desktopMenuListItem} smooth={true} duration={600} onClick={toggleMobileMenu}>Sobre</Link>
                    <Link to="projetos2" offset={0} className={styles.desktopMenuListItem} smooth={true} duration={600} onClick={toggleMobileMenu}>Projetos</Link>
                    <Link offset={0} to="contato2" smooth={true} duration={600} onClick={toggleMobileMenu}>
                        <button className={styles.desktopMenuBtn}>
                            <img src={contact} alt="" className={styles.desktopMenuImg} />
                            Entre em Contato
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;