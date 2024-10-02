import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

import agroConectIMG from "../../assets/agroConect.svg";

import { api } from '../../api';

export const Register = () => {
  // const [usuario, setUsuario] = useState("");
  // const [email, setEmail] = useState("");
  // const [senha, setSenha] = useState("");
  // const [mensagem, setMensagem] = useState("");
  // const [mensagemTipo, setMensagemTipo] = useState("");

  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    senha: ''
  })
  
  const [errosForm, setErrosForm] = useState({
    mensagem: '',
    tipo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {usuario, email, senha} = formData;
    const result = await api("http://localhost:5000/api/register", "POST", { usuario, email, senha });

    setErrosForm({
      mensagem: result.message,
      tipo: result.type,
    });

    // const userData = { usuario, email, senha };

    // try {
    //   const response = await fetch("http://localhost:5000/api/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userData),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     setMensagem(data.message);
    //     setMensagemTipo('success');
    //   } else {
    //     setMensagem(data.message || "Erro ao registrar usuário");
    //     setMensagemTipo('error');
    //   }
    // } catch (error) {
    //   setMensagem("Erro ao conectar com o servidor");
    //   setMensagemTipo('error');
    // }
  };

  return (
    <>      
      {errosForm.mensagem && (
        <div className={`mensagem ${errosForm.tipo}`}>
          {errosForm.mensagem}
        </div>
      )}
      <LayoutComponents>
        {/* {mensagem && (<div className="error-message">{mensagem}</div>)} */}
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="login-form-title">Criar Conta</span>

          <span className="login-form-title">
            <img src={agroConectIMG} alt="Jovem Programador" />
          </span>

          <div className="wrap-input">
            <input
              className={formData.usuario !== "" ? "has-val input" : "input"}
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="Usuario"></span>
          </div>

          <div className="wrap-input">
            <input
              className={formData.email !== "" ? "has-val input" : "input"}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="E-mail"></span>
          </div>

          <div className="wrap-input">
            <input
              className={formData.senha !== "" ? "has-val input" : "input"}
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn" type="submit">
              Registrar
            </button>
          </div>

          <div className="text-center">
            <span className="txt1">Já possui conta? </span>
            <Link className="txt2" to="/login">
              Acessar com Usuario e Senha.
            </Link>
          </div>
        </form>
      </LayoutComponents>
    </>
  );
};
