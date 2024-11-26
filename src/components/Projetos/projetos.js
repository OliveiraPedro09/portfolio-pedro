import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from "../../assets/arrow_icon.svg";
import pattern from "../../assets/pattern.svg";
import projetos_data from "../../assets/projetos_data";
import styles from "./projetos.module.css";

const Projetos = () => {
    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (projeto) => {
        setSelectedProject(projeto);
        setShow(true);
    };

    const handleMostrarMaisClick = () => {
        window.location.href = "https://github.com/OliveiraPedro09";
    }

    var link = ["https://github.com/Code-Nine-FTC/Grupo-Code-Nine","https://github.com/Code-Nine-FTC/API-2024.1","https://github.com/Code-Nine-FTC/API-2024.2"]
    let cont = 0;

    return (
        <div id="projetos" className={styles.projetos}>
            <div className={styles.projetosTitulo}>
                <h1>Meus Projetos</h1>
                <img className={styles.pattern} src={pattern} alt="pattern" />
            </div>
            <div className={styles.projetosContainer}>
                {projetos_data.map((projeto, index) => {
                    const projectLink = link[cont];
                    cont = cont + 1;
                    return (
                        <div key={index}>
                            <a href={projectLink} onClick={(e) => { e.preventDefault(); handleShow(projeto); }}>
                                <img className={styles.imgs} src={projeto.p_img} alt="" />
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className={styles.projetosMais} onClick={handleMostrarMaisClick}>
                <p className={styles.mostrar}>Meu GitHub</p>
                <img className={styles.mostrar} src={arrow} alt="arrow" />
            </div>
            <br />
            <br />

            {selectedProject && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProject.p_nome}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{selectedProject.description}</p>
                        <img src={selectedProject.p_img} alt={selectedProject.p_nome} style={{ width: '100%' }} />
                        <p>{selectedProject.descricao}</p>
                        <p>{selectedProject.soft_skills}</p>
                        <p>{selectedProject.hard_skills}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" href={selectedProject.link} target="_blank">
                            Ver Projeto
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Projetos;