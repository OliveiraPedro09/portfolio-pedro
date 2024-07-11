import React from "react";
import "./intro.css";
import meImg from "../../assets/pedro.png";
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="resp">
            <div className="intro-container">
                <span className="ola">Olá,</span>
                <span className="introText">Eu sou <span className="introName">Pedro</span><br />Software Developer</span>
                <p className="introPara"> Estudante da Fatec Jessen Vidal em SJC no curso de Desenvolvimento de Software. <br/>Fascinado pela maneira como a programação pode transformar ideias em <br />soluções reais e práticas.</p>
            </div>
                <img src={meImg} alt="imgMe" className="bg" />
            </div>
        </section>
    )
}

export default Intro;