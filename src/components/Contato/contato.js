import React from "react";
import "./contato.css";
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

    return(
        <div id="contato" className="contato">
            <div className="contato-titulo">
                <h1>Entre em Contato</h1>
            </div>
        <div className="contato-section">
            <div className="contato-left">
                <h1>Let's Talk</h1>
                <p>Meu nome é Pedro Martins de Oliveira e estou disponível para novas oportunidades de trabalho. Com experiência em programação, habilidades avançadas em inglês e intermediárias em alemão, além de um perfil colaborativo e de liderança, estou pronto para agregar valor à sua equipe.</p>
                <div className="contato-details">
                    <div className="contato-detail">
                        <img src={mail_icon} alt="mail_icon"/>
                        <p>pedromartinsoliveira9@gmail.com</p>
                    </div>
                    <div className="contato-detail">
                        <img src={call_icon} alt="call_icon"/>
                        <p>+55 12 99758-2249</p>
                    </div>
                    <div className="contato-detail">
                        <img src={location_icon} alt="location_icon"/>
                        <p>São José dos Campos, SP</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contato-form">
                <label htmlFor="">Seu Nome</label>
                <input type="text" placeholder="Coloque Seu Nome" name="name"/>
                <label htmlFor="">Seu Email</label>
                <input type="email" placeholder="Coloque Seu Email" name="email"/>
                <label htmlFor="">Mensagem</label>
                <textarea name="mensagem" rows="8" placeholder="Coloque Sua Mensagem"></textarea>
                <button className="botao-enviar" type="submit">Enviar</button>
            </form>
        </div>
    </div>
    )
}

export default Contato;