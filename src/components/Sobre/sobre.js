import React from "react";
import styles from "./sobre.module.css";
import TechCarousel from "../TechCarousel/techCarousel";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

const Sobre = () => {
    return (
        <section id="sobre" className={styles.sobreSection}>
            <div className={styles.container}>
                <div className={styles.sobreHeader}>
                    <span className={styles.sobretitulo}>Sobre Mim</span>
                    <p className={styles.descricao}>
                        Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. 
                        Estudante da Fatec Jessen Vidal em São José dos Campos - SP no curso de Desenvolvimento de Software,
                        busco constantemente aprimorar minhas habilidades e conhecimentos.
                        Valorizo a colaboração em equipe e o feedback contínuo que o Scrum proporciona.
                        Meu foco está em entregar soluções práticas e eficientes, adaptando-me rapidamente
                        às mudanças e novas tecnologias.
                    </p>
                </div>
                
                <div className={styles.techSection}>
                    <h2 className={styles.techTitle}>Tecnologias</h2>
                    <p className={styles.techDescription}>
                        Ao longo da minha jornada, trabalhei com diversas tecnologias que me permitiram
                        desenvolver soluções completas - do backend ao frontend, incluindo DevOps e IoT.
                    </p>
                    
                    <TechCarousel />
                </div>
            </div>
            
            <Link to="projetos2" smooth={true} duration={600} className={styles.scrollIndicator}>
                <FaChevronDown className={styles.scrollIcon} />
                <span className={styles.scrollText}>Rolar para baixo</span>
            </Link>
        </section>
    )
}

export default Sobre;