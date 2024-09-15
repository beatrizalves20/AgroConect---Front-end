import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import agroConectIMG from "../../assets/agroConect.svg";

import { api } from '../../api';

export const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [mensagemTipo, setMensagemTipo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await api("http://localhost:5000/api/register", "POST", { usuario, email, senha });
    setMensagem(result.message);
    setMensagemTipo(result.type);

  }

  return (
    <>
      {mensagem && (
        <div className={`mensagem ${mensagemTipo}`}>
          {mensagem}
        </div>
      )}
      <LayoutComponents >
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="login-form-title"> Criar Conta </span>

          <span className="login-form-title">
            <img src={agroConectIMG} alt="Jovem Programador" />
          </span>

          <div className="wrap-input">
            <input
              className={usuario !== "" ? "has-val input" : "input"}
              type="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Usuario"></span>
          </div>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="E-mail"></span>
          </div>

          <div className="wrap-input">
            <input
              className={senha !== "" ? "has-val input" : "input"}
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Cadastrar</button>
          </div>

          <div className="text-center">
            <span className="txt1">Já possui conta? </span>
            <Link className="txt2" to="/login">
              Acessar com E-mail e Senha.
            </Link>
          </div>
        </form>
      </LayoutComponents>
    </>
  )
}