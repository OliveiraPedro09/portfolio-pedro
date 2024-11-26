import React from "react";
import styles from "./intro.module.css";
import meImg from "../../assets/pedro.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className={styles.resp}>
                <div className={styles.introContainer}>
                    <span className={styles.ola}>Olá,</span>
                    <span className={styles.introText}>Eu sou <span className={styles.introName}>Pedro Oliveira</span><br />Software Developer</span>
                    <p className={styles.introPara}> Estudante da Fatec Jessen Vidal em SJC no curso de Desenvolvimento de Software. <br/>Fascinado pela maneira como a programação pode transformar ideias em <br />soluções reais e práticas.</p>
                </div>
                <img src={meImg} alt="imgMe" className={styles.bg} id="intro2"/>
            </div>
        </section>
    )
}

export default Intro;