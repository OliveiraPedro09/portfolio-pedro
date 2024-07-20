import React from "react";
import "./projetos.css";
import projetos_data from "../../assets/projetos_data";
import arrow from "../../assets/arrow_icon.svg";
import pattern from "../../assets/pattern.svg";

const Projetos = () => {
    const handleMostrarMaisClick = () => {
        window.location.href = "https://github.com/OliveiraPedro09";
    }

    return(
        <div id="projetos" className="projetos">
            <div className="projetos-titulo">
                <h1>Meus Projetos</h1>
                <img className="pattern" src={pattern} alt="pattern" />
            </div>
            <div className="projetos-container">
                {projetos_data.map((projeto, index) => {
                    return <img className="imgs" key={index} src={projeto.p_img} alt="" />
                })}
            </div>
            <div className="projetos-mais">
                <p className="mostrar" onClick={handleMostrarMaisClick}>Meu GitHub</p>
                <img className="mostrar" onClick={handleMostrarMaisClick} src={arrow} alt="arrow" />
            </div>
        </div>
    )
}

export default Projetos;