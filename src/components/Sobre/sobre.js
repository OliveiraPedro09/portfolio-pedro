import React from "react";
import "./sobre.css";
import scrum from "../../assets/scrum.png";
import imgReact from "../../assets/react.png";
import imgSQL from "../../assets/mysql.png";

const Sobre = () => {
    return (
        <section id="sobre">
            <span className="sobretitulo">Sobre Mim</span>
            <span className="descricao">Eu sou um entusiasta do método Scrum. Valorizo a colaboração em equipe e o feedback contínuo que o Scrum proporciona. Para aprender tecnologias como React JS, estudo tutoriais e construo projetos próprios. No MySQL, aprofundo-me em cursos de banco de dados e prática constante. Aplicar o Scrum me permite gerenciar projetos complexos com sucesso, sempre focado em entregar valor contínuo e adaptando-me rapidamente às mudanças.
            </span>
            <div className="quadrat">
                <div className="quadrat1">
                    <img src={scrum} alt="Scrum" className="quadratImg" />
                    <div className="quadratText">
                        <h2>SCRUM</h2>
                        <p>O Scrum é um framework ágil usado para gerenciar e desenvolver projetos complexos, dividindo o trabalho em sprints curtos e iterativos com feedback constante e colaboração em equipe.</p>
                    </div>
                </div>
                <div className="quadrat1">
                    <img src={imgReact} alt="React" className="quadratImg" />
                    <div className="quadratText">
                        <h2>ReactJS</h2>
                        <p>React JS é uma biblioteca JavaScript para construir interfaces de usuário, especialmente aplicações de página única, usando componentes reutilizáveis.</p>
                    </div>
                </div>
                <div className="quadrat1">
                    <img src={imgSQL} alt="MySQL" className="quadratImg" />
                    <div className="quadratText">
                        <h2>MySQL</h2>
                        <p>MySQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto, usado para armazenar, gerenciar e recuperar dados estruturados.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre;