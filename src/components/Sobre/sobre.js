import React from "react";
import styles from "./sobre.module.css";
import scrum from "../../assets/scrum.png";
import imgReact from "../../assets/react.png";
import imgSQL from "../../assets/mysql.png";
import imgJava from "../../assets/java.png";

const Sobre = () => {
    return (
        <section id="sobre">
            <br id="sobre2" />
            <br />
            <br />
            <br />
            <div className={styles.box}>
                <span className={styles.sobretitulo}>Sobre Mim</span>
                <span className={styles.descricao}>Eu sou um entusiasta do método Scrum. Valorizo a colaboração em equipe e o feedback contínuo que o Scrum proporciona. Para aprender tecnologias como React TypeScript, estudo tutoriais e construo projetos próprios. No MySQL, aprofundo-me em cursos de banco de dados e prática constante. Aplicar o Scrum me permite gerenciar projetos complexos com sucesso, sempre focado em entregar valor contínuo e adaptando-me rapidamente às mudanças.
                </span>
            </div>
            <div className={styles.quadrat}>
                <div className={styles.quadrat1}>
                    <img src={scrum} alt="Scrum" className={styles.quadratImg} />
                    <div className={styles.quadratText}>
                        <h2>SCRUM</h2>
                        <p>O Scrum é um framework ágil usado para gerenciar e desenvolver projetos complexos, dividindo o trabalho em sprints curtos e iterativos com feedback constante e colaboração em equipe.</p>
                    </div>
                </div>
                <div className={styles.quadrat1}>
                    <img src={imgReact} alt="React" className={styles.quadratImg} />
                    <div className={styles.quadratText}>
                        <h2>ReactTSX</h2>
                        <p>React TS é uma biblioteca TypeScript para construir interfaces de usuário, especialmente aplicações de página única, usando componentes reutilizáveis.</p>
                    </div>
                </div>
                <div className={styles.quadrat1}>
                    <img src={imgSQL} alt="MySQL" className={styles.quadratImg} />
                    <div className={styles.quadratText}>
                        <h2>MySQL</h2>
                        <p id="projetos2">MySQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto, usado para armazenar, gerenciar e recuperar dados estruturados.</p>
                    </div>
                </div>
                <div className={styles.quadrat1}>
                    <img src={imgJava} alt="MySQL" className={styles.quadratImg} />
                    <div className={styles.quadratText}>
                        <h2>JAVA</h2>
                        <p id="projetos2">MySQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto, usado para armazenar, gerenciar e recuperar dados estruturados.</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </section>
    )
}

export default Sobre;