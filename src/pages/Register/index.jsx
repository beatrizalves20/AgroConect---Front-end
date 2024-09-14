import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import agroConectIMG from "../../assets/agroConect.svg";


export const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("")

  return (
    <LayoutComponents >
      <form className="login-form">
        <span className="login-form-title"> Criar Conta </span>

        <span className="login-form-title">
          <img src={agroConectIMG} alt="Jovem Programador" />
        </span>

        <div className="wrap-input">
          <input
            className={nome !== "" ? "has-val input" : "input"}
            type="email"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={usuario !== "" ? "has-val input" : "input"}
            type="email"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
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
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Usuario e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}