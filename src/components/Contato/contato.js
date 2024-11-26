import React from "react";
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./contato.module.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contato = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "73afd969-84b3-42fe-ab81-fd64e8885c31");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contato" className={styles.contato}>
            <br />
            <br />
            <div id="contato2" className={styles.contatoTitulo}>
                <h1>Entre em Contato</h1>
            </div>
            <div className={styles.contatoContainer}>
                <div className={styles.contatoSection}>
                    <h1>Let's Talk</h1>
                    <p>Meu nome é Pedro Martins de Oliveira e estou disponível para novas oportunidades de trabalho. Com experiência em programação, habilidades avançadas em inglês e intermediárias em alemão, além de um perfil colaborativo e de liderança, estou pronto para agregar valor à sua equipe.</p>
                    <div className={styles.contatoDetails}>
                        <div className={styles.contatoDetail}>
                            <img src={mail_icon} alt="mail_icon" />
                            <p>pedromartinsoliveira9@gmail.com</p>
                        </div>
                        <div className={styles.contatoDetail}>
                            <img src={call_icon} alt="call_icon" />
                            <p>+55 12 99758-2249</p>
                        </div>
                        <div className={styles.contatoDetail}>
                            <img src={location_icon} alt="location_icon" />
                            <p>São José dos Campos, SP</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className={styles.contatoForm}>
                    <FloatingLabel controlId="floatingName" label="Seu Nome" className={`mb-3 ${styles.floatingLabel}`}>
                        <Form.Control type="text" placeholder="Coloque Seu Nome" name="name" className="form-control" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Seu Email" className={`mb-3 ${styles.floatingLabel}`}>
                        <Form.Control type="email" placeholder="Coloque Seu Email" name="email" className="form-control" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingMensagem" label="Mensagem" className={`mb-3 ${styles.floatingLabel}`}>
                        <Form.Control as="textarea" name="mensagem" rows="8" placeholder="Coloque Sua Mensagem" className="form-control" />
                    </FloatingLabel>
                    <Button className={styles.botaoEnviar} type="submit">Enviar</Button>
                </form>
            </div>
        </div>
    );
}

export default Contato;