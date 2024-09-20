import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import agroConectIMG from "../../assets/agroConect.svg";

import { api } from '../../api';

export const Register = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    email: "",
    senha: "",
    mensagem: "",
    mensagemTipo: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await api("http://localhost:5000/api/register", "POST", {
      usuario: formData.usuario,
      email: formData.email,
      senha: formData.senha,
    });

    setFormData({
      ...formData,
      mensagem: result.message,
      mensagemTipo: result.type,
    });  
  };

  return (
    <>
      {formData.mensagem && (
        <div className={`mensagem ${formData.mensagemTipo}`}>
          {formData.mensagem}
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
              className={formData.usuario !== "" ? "has-val input" : "input"}
              type="usuario"
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
